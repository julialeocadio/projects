#09/18/2024

import cv2

path = "/home/jj/projects/projects/imagetosketch/barbie1.jpeg"
image = cv2.imread(path)
if image is not None:
    print('Image loaded')
else:
    print('image did not load')

grey_img = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
invert = cv2.bitwise_not(grey_img)
blur = cv2.GaussianBlur(invert, (21,21), 0)
invertedblur = cv2.bitwise_not(blur)
sketch = cv2.divide(grey_img, invertedblur, scale=256.0)
cv2.imwrite('barbie2_sketch.jpeg', sketch)
