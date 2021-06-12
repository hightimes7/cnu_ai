# 사진의 얼굴 성별 인식
# https://minimin2.tistory.com/140

import cv2
import cvlib as cv
import numpy as np

img = cv2.imread('./song.png')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
faces, confidences = cv.detect_face(img)

for (x, y, x2, y2)in faces:
    face_img = img[y:y2, x:x2]
    label, confidence = cv.detect_gender(face_img)
    cv2.rectangle(img, (x, y), (x2, y2), (0, 255, 0), 2)
    gender = np.argmax(confidence)
    text = f'{label[gender]}:{confidence[gender]:.1%}'
    cv2.putText(img, text, (x,y-10), cv2.FONT_HERSHEY_PLAIN, 1, (0, 255, 0), 1)

cv2.imshow('image', img)
key = cv2.waitKey(0)
cv2.destroyAllWindows()