# 새창에 이미지 띄우기

import cv2

def showImage():
	imgfile='./song.png'
	img=cv2.imread(imgfile, cv2.IMREAD_COLOR)

	cv2.imshow('model', img)  # PyCharm 에선 cv2.imshow() 가 됨
	cv2.waitKey(0) # 무한대기
	cv2.destroyAllWindows()

showImage()