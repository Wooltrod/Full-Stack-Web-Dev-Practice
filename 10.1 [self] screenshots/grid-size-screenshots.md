![larger grid size than content](image.png)
![more content than grid space available](image-1.png)
///////////////////////////////////////////////////////////////////////////////////////////////
![screenshot of CSS Grid Sizing Exercise task](image-2.png)
![screenshot of solution code for screenshot of CSS Grid Sizing Exercise task](image-3.png)
.grid-container {
 display: grid;
grid-template-columns: auto 400px minmax(200px, 500px);
grid-template-rows: 1fr 1fr 2fr;
grid-auto-rows: 50px;
}
  