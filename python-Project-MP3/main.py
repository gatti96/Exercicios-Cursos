# importing packages
from pytube import YouTube
import os

# url input from user
yt = YouTube(
    str(input("Digite a URL do video You Tube: \n>> ")))

# extract only audio
video = yt.streams.filter(only_audio=True).first()

# check for destination to save file
print("Escolha a pasta:")
destination = str(input(">> ")) or '.'

# download the file
out_file = video.download(output_path=destination)

# save the file
base, ext = os.path.splitext(out_file)
new_file = base + '.mp3'
os.rename(out_file, new_file)

# result of success
print(yt.title + " Download concluído com sucesso!")