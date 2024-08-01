<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Laravel</title>

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

  <!-- Scripts -->
  @vite('resources/js/app.js')

  <!-- Styles -->
  @vite('resources/css/app.css')
  <style>
    body {
      background-color: #333333;
      color: #FFFFFF;
      width: 60vw;
      height: 80vh;
      text-align: center;
      margin-right: auto;
      margin-left: auto;
    }

    div {
      background-color: black;
    }
  </style>
</head>

<body>
  <div id="app"></div>
</body>

</html>
