import os
from google.cloud import vision
from google.cloud import vision_v1 as vision

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = r'visionapi.json'

client = vision.ImageAnnotatorClient()

image = vision.types.Image()
image.source.image_uri = 'https://storage.googleapis.com/pastame/pasta.jpg'

response = client.label_detection(image=image)

for label in response.label_annotations:
    print({'label': label.description, 'score': label.score})
