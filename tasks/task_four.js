<!DOCTYPE html>
<html>
    <head>
    <meta charset=utf-8 />
    <title>Remove items from a dropdown list</title>
</head>
    <body>
      <form>
        <select id="colorSelect">
            <option>Red</option>
            <option>Green</option>
            <option>White</option>
            <option>Black</option>
        </select>
        <input type="button" onclick="removecolor()" value="Select and Remove"><input/>
      </form>
       <script>
       function removecolor() {
       let colorSelect = document.getElementById("colorSelect");
       
       let selectedValue = colorSelect.Value[colorSelect.selectedIndex];

       colorSelect.remove(selectedValue);

       colorSelect.selectedIndex = 0;
      }
       </script>

    </body>
</html>
            