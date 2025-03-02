<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'templates/head.html'; ?>
</head>
<body>
    <div class="ar-business-card" id="ar-business-card">
        <?php include 'templates/card-front.html'; ?>
        <?php include 'templates/info-section.html'; ?>
    </div>

    <?php include 'templates/card-back.html'; ?>

    <script src="js/libs/mindar/mindar-image-three.prod.js"></script>
    <script src="js/index.js" type="module"></script>
</body>
</html>