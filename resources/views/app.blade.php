<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">

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

  <!-- データベース連携部分ここから -->
  <script>
    const user = '{{$user}}';
    const ability = '{{$ability}}';
    const enemies = '{{$enemy}}';
    const enemyAbility = '{{$enemyability}}';
    const stritembox = '{{json_encode($items)}}';
    const strskilltree = '{{json_encode($skills)}}';
    const strallskill = '{{json_encode($allSkill)}}';
    const strequipmentbox = '{{json_encode($equipments)}}';
  </script>
  <!-- ここまで -->
</body>

</html>
