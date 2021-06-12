# 사진의 얼굴 인식
# https://minimin2.tistory.com/140

import cv2
import cvlib as cv

img = cv2.imread('./song.png')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

faces, confidences = cv.detect_face(img)

for (x, y, x2, y2), conf in zip(faces, confidences):
    cv2.putText(img, str(conf), (x,y-10), cv2.FONT_HERSHEY_PLAIN, 1, (0, 255, 0), 1)
    cv2.rectangle(img, (x, y), (x2, y2), (0, 255, 0), 2)
cv2.imshow('image', img)

key = cv2.waitKey(0)
cv2.destroyAllWindows()