import collections
import numpy as np
import pandas as pd
import matplotlib.cm as cm
import matplotlib.pyplot as plt
from matplotlib import rcParams
from wordcloud import WordCloud, STOPWORDS

all_headlines = input("Escreva um texto: ")
stopwords = STOPWORDS
# https://github.com/amueller/word_cloud/tree/main
wordcloud = WordCloud(stopwords=stopwords,
                      background_color="white",
                      max_words=1000).generate(all_headlines)
rcParams['figure.figsize'] = 10, 10
plt.imshow(wordcloud)
plt.axis("off")
plt.show()
