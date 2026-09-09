from pathlib import Path
import shutil
p=Path(__file__).resolve().parent
d=p/'dist'
if d.exists(): shutil.rmtree(d)
d.mkdir()
for name in ['index.html','style.css','script.js','certificados.html','projetos','assets']:
 src=p/name
 if src.is_dir():shutil.copytree(src,d/name)
 else:shutil.copy2(src,d/name)
print('Site estático pronto em dist/')
