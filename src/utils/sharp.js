const sharp = require('sharp');

sharp('./original.jpeg').resize(500).toFile('resize.jpeg');