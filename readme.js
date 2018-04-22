#!/bin/python

import sys


n,k = raw_input().strip().split(' ')
n,k = [int(n),int(k)]
rQueen,cQueen = raw_input().strip().split(' ')
rQueen,cQueen = [int(rQueen),int(cQueen)]
umax = n-rQueen
dmax = rQueen-1
lmax = cQueen-1
rmax = n-cQueen
lldmax = min(rQueen-1, cQueen-1) 
lrdmax = min(rQueen-1, n-cQueen)
uldmax = min(n-rQueen, cQueen-1)
urdmax = min(n-rQueen, n-cQueen)

for a0 in xrange(k):
    rObstacle,cObstacle = raw_input().strip().split(' ')
    rObs,cObs = [int(rObstacle),int(cObstacle)]
    if cObs == cQueen and rObs < rQueen:
        diff = dmax - rObs
        if diff < dmax:
            dmax = diff
    elif cObs == cQueen and rObs > rQueen:
        diff = rObs - rQueen - 1
        if diff < umax:
            umax = diff
    elif rObs == rQueen and cObs < cQueen:
        diff = lmax - cObs
        if diff < lmax:
            lmax = diff
    elif rObs == rQueen and cObs > cQueen:
        diff = cObs - cQueen - 1
        if diff < rmax:
            rmax = diff
    elif abs(rObs - rQueen) == abs(cObs - cQueen):
        diff = abs(rObs - rQueen) - 1
        if rObs<rQueen and cObs<cQueen and diff < lldmax:
            lldmax = diff 
        elif rObs<rQueen and cObs>cQueen and diff < lrdmax:
            lrdmax = diff 
        elif rObs>rQueen and cObs<cQueen and diff < uldmax:
            uldmax = diff 
        elif rObs>rQueen and cObs>cQueen and diff < urdmax:
            urdmax = diff 

print dmax+umax+lmax+rmax+lldmax+lrdmax+uldmax+urdmax
