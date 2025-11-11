LastImageNB = 18
folder = 2

for i in range(1, LastImageNB+1):
    print(f'''
    <div class="gallery-item">
        <img src="images/webp/Gallery/{folder}/FastLoads/{i}.webp"
            data-preview="images/webp/Gallery/{folder}/{i}.webp"
            data-full="images/Raw/EduVentureBlogs/{folder}/{i}.jpg"/>
    </div>
    ''')
