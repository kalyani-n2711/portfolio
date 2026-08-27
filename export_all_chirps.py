import ee
import geemap
import os
from datetime import datetime, timedelta

# Initialize Earth Engine
ee.Initialize(project='amrita-26april')

# Buffer shapefile uploaded to Earth Engine
roi = ee.FeatureCollection(
    'projects/amrita-26april/assets/ganga_buffer_150km'
)

# Network drive
NETWORK_ROOT = r"\\100.84.159.36\anrf-arg-matrics\Kalyani Agarwal"

# Time period
start_date = datetime(2015, 1, 1)
end_date = datetime(2025, 12, 31)

current = start_date
week_no = 1
current_year = 2015

while current <= end_date:

    # Create year folder
    year_folder = os.path.join(
        NETWORK_ROOT,
        f"CHIRPS_{current_year}"
    )
    os.makedirs(year_folder, exist_ok=True)

    # Week start/end
    week_start = current
    week_end = current + timedelta(days=7)

    # Reset week counter at new year
    if week_start.year != current_year:
        current_year = week_start.year
        week_no = 1

        year_folder = os.path.join(
            NETWORK_ROOT,
            f"CHIRPS_{current_year}"
        )
        os.makedirs(year_folder, exist_ok=True)

    filename = os.path.join(
        year_folder,
        f"CHIRPS_{current_year}_W{week_no:02d}.tif"
    )

    # Skip if already exists
    if os.path.exists(filename):
        print("Skipping:", filename)
        current = week_end
        week_no += 1
        continue

    print(
        f"Exporting Year={current_year} "
        f"Week={week_no} -> {filename}"
    )

    try:

        image = (
            ee.ImageCollection("UCSB-CHG/CHIRPS/DAILY")
            .filterDate(
                week_start.strftime("%Y-%m-%d"),
                week_end.strftime("%Y-%m-%d")
            )
            .sum()
            .clip(roi)
        )

        geemap.ee_export_image(
            image,
            filename=filename,
            scale=5566,
            region=roi.geometry(),
            file_per_band=False
        )

        print("Done")

    except Exception as e:
        print("ERROR:", e)

    current = week_end
    week_no += 1

print("ALL EXPORTS COMPLETED")