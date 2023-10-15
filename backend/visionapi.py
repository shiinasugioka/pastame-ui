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

highest = {'label': '', 'score': 0}
for label in response.label_annotations:
    print({'label': label.description, 'score': label.score})
    # if label.score > highest['score']:
    #     highest = {'label': label.description, 'score': label.score}

# print(highest['label'])
