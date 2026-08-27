import ee
import geemap
import os
from datetime import datetime, timedelta

ee.Initialize(project='amrita-26april')

roi = ee.FeatureCollection(
    'projects/amrita-26april/assets/ganga_buffer_150km'
)

NETWORK_ROOT = r"\\100.84.159.36\anrf-arg-matrics\Kalyani Agarwal"

year_folder = os.path.join(NETWORK_ROOT, "CHIRPS_2015")
os.makedirs(year_folder, exist_ok=True)

start = datetime(2015, 1, 1)

for week in range(5):

    s = start + timedelta(days=7 * week)
    e = s + timedelta(days=7)

    image = (
        ee.ImageCollection("UCSB-CHG/CHIRPS/DAILY")
        .filterDate(s.strftime("%Y-%m-%d"),
                    e.strftime("%Y-%m-%d"))
        .sum()
        .clip(roi)
    )

    outfile = os.path.join(
        year_folder,
        f"CHIRPS_2015_W{week+1:02d}.tif"
    )

    print("Exporting:", outfile)

    geemap.ee_export_image(
        image,
        filename=outfile,
        scale=5566,
        region=roi.geometry(),
        file_per_band=False
    )

print("Finished 5-week test")