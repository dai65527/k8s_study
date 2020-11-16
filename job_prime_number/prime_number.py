#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os
import numpy as np
import math

def is_isprime(n):
    if n % 2 == 0 and n > 2:
        return False
    return all(n % i for i in range(3, int(math.sqrt(n)) + 1, 2))

nstart = eval(os.environ.get("A_START_NUM"))
nsize = eval(os.environ.get("A_SIZE_NUM"))
nend = nstart + nsize
ay = np.arange(nstart, nend)

pvec = np.vectorize(is_isprime)

primes_tf = pvec(ay)

primes = np.extract(primes_tf, ay)
print(primes)
