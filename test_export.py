import ee
import geemap

ee.Initialize(project='amrita-26april')

roi = ee.FeatureCollection(
    'projects/amrita-26april/assets/ganga_buffer_150km'
)

img = (
    ee.ImageCollection('UCSB-CHG/CHIRPS/DAILY')
    .filterDate('2015-01-01', '2015-01-08')
    .sum()
    .clip(roi)
)

geemap.ee_export_image(
    img,
    filename=r'C:\Users\Kalyani Agarawal\Desktop\CHIRPS_TEST.tif',
    scale=5566,
    region=roi.geometry(),
    file_per_band=False
)

print("Done")