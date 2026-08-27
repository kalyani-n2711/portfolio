import ee
import geemap
import os
from datetime import datetime, timedelta

ee.Initialize(project='amrita-26april')

roi = ee.FeatureCollection(
    'projects/amrita-26april/assets/ganga_buffer_150km'
)

base_folder = r'\\100.84.159.36\Kalyani Agarwal'

for year in range(2015, 2026):

    year_folder = os.path.join(base_folder, f'CHIRPS_{year}')
    os.makedirs(year_folder, exist_ok=True)

    start_date = datetime(year, 1, 1)

    for week in range(52):

        week_start = start_date + timedelta(days=7*week)
        week_end   = week_start + timedelta(days=7)

        img = (
            ee.ImageCollection('UCSB-CHG/CHIRPS/DAILY')
            .filterDate(
                week_start.strftime('%Y-%m-%d'),
                week_end.strftime('%Y-%m-%d')
            )
            .sum()
            .clip(roi)
        )

        filename = os.path.join(
            year_folder,
            f'CHIRPS_{year}_W{week+1:02d}.tif'
        )

        print("Exporting:", filename)

        geemap.ee_export_image(
            img,
            filename=filename,
            scale=5566,
            region=roi.geometry(),
            file_per_band=False
        )

print("Finished.")