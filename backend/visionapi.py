import os
import sys
from google.cloud import vision
from google.cloud import vision_v1 as vision

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = r'visionapi.json'

client = vision.ImageAnnotatorClient()

image_url = sys.argv[1]
image = vision.types.Image()
image.source.image_uri = image_url

response = client.label_detection(image=image)

labels = [{'label': label.description, 'score': label.score} for label in response.label_annotations]

top_5 = sorted(labels, key=lambda x: x['score'], reverse=True)[:5]
for item in top_5:
    print(item)
