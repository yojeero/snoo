<img src="preview/git.png">

### [Snoo](https://snoo.vercel.app/) - Tailwind template.

- Tailwind CSS v4
- HTML5, CSS3
- Inline SVG icons 
- Local Google Fonts
- Google maps
- Fully responsive layout
- Vite config file
- Simple use Tailwind via CLI

```
Tailwind CSS v4 

Don't need tailwind.config anymore.
Just use > @import "tailwindcss"; < in your .css
```

Use Tailwind via CLI

- in project folder run in terminal > npm install tailwindcss @tailwindcss/cli  
- create input.css for your CSS styles
- insert > @import "tailwindcss"; < in input.css  
- run in terminal > npx @tailwindcss/cli -i ./css/input.css -o ./css/style.css --watch 
- run again > in terminal > npx @tailwindcss/cli -i ./css/input.css -o ./css/style.css --watch < for build your production CSS
- you can remove input.css for production after previous step
- Enjoy!