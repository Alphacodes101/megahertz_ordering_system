'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a155b1cbd9eda3f8387524e5bcc85ef5",
"version.json": "9121869202a8939650f998704535c20f",
"index.html": "5db337579c31c47069d1b9b04b165c2b",
"/": "5db337579c31c47069d1b9b04b165c2b",
"main.dart.js": "883b8e954c17984a8ff05d3ac94c9845",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"icons/Icon-maskable-192%20copy.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"icons/icon-192.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"icons/Icon-maskable-512.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"icons/icon-512.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"manifest.json": "6c9285118d3d3617711f846531134b34",
"assets/AssetManifest.json": "c2601a14d87d60cf5a9a6a33b460fc51",
"assets/NOTICES": "d38ac8f202c450675971fc81c79c76ac",
"assets/FontManifest.json": "d0975c94afeb32ec4155750ce2543f5e",
"assets/AssetManifest.bin.json": "bbcbd81af307b81cea3561c2d97be5e4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_credit_card/icons/discover.png": "62ea19837dd4902e0ae26249afe36f94",
"assets/packages/flutter_credit_card/icons/rupay.png": "a10fbeeae8d386ee3623e6160133b8a8",
"assets/packages/flutter_credit_card/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/flutter_credit_card/icons/visa.png": "f6301ad368219611958eff9bb815abfe",
"assets/packages/flutter_credit_card/icons/hipercard.png": "921660ec64a89da50a7c82e89d56bac9",
"assets/packages/flutter_credit_card/icons/elo.png": "ffd639816704b9f20b73815590c67791",
"assets/packages/flutter_credit_card/icons/amex.png": "f75cabd609ccde52dfc6eef7b515c547",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/unionpay.png": "87176915b4abdb3fcc138d23e4c8a58a",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f0b7648e0f2e645eb0ec72f307842a6c",
"assets/fonts/MaterialIcons-Regular.otf": "6e2f699699bf501b27c5b552daf7a69d",
"assets/assets/coming-soon.png": "94b9926b6113a8eeea53e64768f9151f",
"assets/assets/logo.jpg": "51a28e1b4ce85f58a0797518ad555fcb",
"assets/assets/logo.png": "53d747599736adb8bb493748471be9ad",
"assets/assets/parts/Sensors/Vibration%2520Sensor%2520Module.png": "c603171b3361d928a0fbddad26a0b843",
"assets/assets/parts/Sensors/Microphone%2520Sound%2520Sensor%2520Module.png": "ab1534c506b8cc433e9721fd6b01d56b",
"assets/assets/parts/Sensors/RFID%2520Reader%2520.Writer%2520RC522%2520SPI%2520S50%2520with%2520RFID%2520Card%2520and%2520Tag.png": "95021cb443ae3fe1467a61a579a5ab42",
"assets/assets/parts/Sensors/5V%2520Single%2520Channel%2520RELAY%2520Module.png": "126875a2009aaed0661d43e8fd693344",
"assets/assets/parts/Sensors/5v%25202%2520Channel%2520Relay%2520Module.png": "e19de5d77ddb43032560443e050d5744",
"assets/assets/parts/Sensors/5v%25204%2520Channel%2520Relay%2520Module.png": "45c8084118fa8c5d79a1b67e7e3f42e7",
"assets/assets/parts/Sensors/Flame%2520Sensor%2520infrared%2520Receiver%2520Ignition%2520source%2520detection%2520module.png": "e0e486bac080729b9b5209dfbdda4ca9",
"assets/assets/parts/Sensors/5v%25208%2520Channel%2520Relay%2520Module.png": "e7b1bbf7515a396819da4fd8a55e5b7f",
"assets/assets/parts/Sensors/Analog%2520Capacitive%2520Soil%2520Moisture%2520Sensor.png": "6dd51aa455ce885f52cf35e265784614",
"assets/assets/parts/Sensors/HC-SR04-Ultrasonic%2520Range%2520Finder.png": "4e5b6f8b85587d1a4d0b6eb985bdb5b8",
"assets/assets/parts/Sensors/2.2inch%2520Flex%2520Sensor.png": "2de49b9b96311061b7c28746044c26fb",
"assets/assets/parts/Sensors/Soil%2520Moisture%2520Sensor%2520Module.png": "0ef5dfeff2eac9bd625cc8377968b3a1",
"assets/assets/parts/Sensors/Ecg%2520module%2520AD8232%2520ecg%2520measurement%2520pulse%2520heart%2520ecg%2520monitoring%2520sensor%2520module%2520kit.png": "82fa57da03f881733927b20ed2fa4604",
"assets/assets/parts/Sensors/Infrared%2520Obstacle%2520Avoidance%2520IR%2520Sensor%2520Module%2520(Active%2520Low).png": "a8358c5fb7a00380776c1d9110a283b3",
"assets/assets/parts/Sensors/Tilt%2520Sensor%2520Vibration%2520Alarm%2520Vibration%2520Switch%2520Module%2520for%2520Arduino.png": "4936094b2f061f64418e4983ef15913d",
"assets/assets/parts/Sensors/37%2520in%25201%2520Sensors%2520Kit%2520for%2520Arduino.png": "051254b674dbb12db19a24556129affd",
"assets/assets/parts/Sensors/DHT11%2520Temperature%2520And%2520Humidity%2520Sensor%2520Module%2520with%2520LED.png": "5a596484e62a6bca19d6dbced3cceaa2",
"assets/assets/parts/Sensors/HCSR501%2520PIR%2520Motion%2520Sensor%2520(Passive%2520Infrared%2520Sensor).png": "6cff1a5a66f84f1cdd3a6bc675291b8f",
"assets/assets/parts/Sensors/ADXL345%2520Accelerometer%2520Module.png": "59413be4a270017769cafe3e1ea1f23f",
"assets/assets/parts/Sensors/MQ-5%2520Methane%2520LPG%2520Liquid%2520Propane%2520Gas%2520Sensor%2520Module.png": "05cd8b1b8efc8b478bda9f71fd309200",
"assets/assets/parts/Sensors/MQ-3%2520Alcohol%2520Detector%2520Gas%2520Sensor%2520Module.png": "a04793a421042e2dc9d65b8e9bde011c",
"assets/assets/parts/Sensors/EMG%2520Sensor%2520%2520%2520Muscle%2520Sensor%2520Module%2520For%2520Arduino.png": "dd607f38a04e36ea96e44a2ec37615a2",
"assets/assets/parts/Sensors/5%2520in%25201%2520Sensor%2520Kit%2520for%2520Arduino.png": "68e311ef0f6aa2241bde3bf9e0767bb3",
"assets/assets/parts/Wires%2520&%2520Cables/20%2520CM%2520MALE-MALE%2520JUMPER%2520WIRE%2520(SET%2520OF%252040).png": "cd2243b37e8130bef99d28193c382008",
"assets/assets/parts/Wires%2520&%2520Cables/Cable%2520for%2520Arduino%2520Nano%2520(USB%25202.0%2520A%2520to%2520USB%25202.0%2520Mini%2520B)%252030cm.jpg": "a9a1c5da5c56c44ec0ada49c17fc0bac",
"assets/assets/parts/Wires%2520&%2520Cables/20%2520CM%2520MALE-MALE%2520JUMPER%2520WIRE%25201%2520PC.jpg": "4e1d2d1d35fbbaabadbe3b15c67e0361",
"assets/assets/parts/Wires%2520&%2520Cables/20%2520CM%2520MALE-FEMALE%2520JUMPER%2520WIRE%25201%2520PC.jpg": "b83ad8038a25a0018bb46ffc4dba3b26",
"assets/assets/parts/Wires%2520&%2520Cables/20%2520CM%2520MALE-MALE%2520JUMPER%2520WIRE%2520(SET%2520OF%252010).jpg": "3adb3248feda6c606d3ada633ac196ea",
"assets/assets/parts/Wires%2520&%2520Cables/Colorful%2520Heat%2520Shrink%2520Tubing%2520Insulation%2520Set%2520(168pcs).png": "d7998fc3bf94aea137d0fdb54b8d3ac0",
"assets/assets/parts/Wires%2520&%2520Cables/20%2520CM%2520FEMALE-FEMALE%2520JUMPER%2520WIRE%2520(SET%2520OF%252040).png": "cd2243b37e8130bef99d28193c382008",
"assets/assets/parts/Wires%2520&%2520Cables/20%2520CM%2520MALE-FEMALE%2520JUMPER%2520WIRE%2520(SET%2520OF%252040).png": "cd2243b37e8130bef99d28193c382008",
"assets/assets/parts/Wires%2520&%2520Cables/20%2520CM%2520FEMALE-FEMALE%2520JUMPER%2520WIRE%25201%2520PC.jpg": "58320460ba83e2c9678fbc711fc1e713",
"assets/assets/parts/Wires%2520&%2520Cables/USB%2520A%2520to%2520B%2520Cable%2520for%2520Arduino%2520UNO%2520%2520%2520MEGA%2520(Blue).png": "758cc82eb2cc7e956af2f53f98263b8a",
"assets/assets/parts/Wires%2520&%2520Cables/20%2520CM%2520MALE-FEMALE%2520JUMPER%2520WIRE%2520(SET%2520OF%252010).jpg": "3adb3248feda6c606d3ada633ac196ea",
"assets/assets/parts/Wires%2520&%2520Cables/5mm%2520Heat%2520Shrink%2520Tube.png": "4b7f7798d13f25e5ada1321352bee01c",
"assets/assets/parts/Wires%2520&%2520Cables/Rainbow%252010%2520Core%2520Color%2520Flat%2520Ribbon%2520Copper%2520Wire%2520Cable%2520-%25201%2520Meter.jpg": "439d120e91bffd043b53724cf414d15b",
"assets/assets/parts/Wires%2520&%2520Cables/20%2520CM%2520FEMALE-FEMALE%2520JUMPER%2520WIRE%2520(SET%2520OF%252010).jpg": "3adb3248feda6c606d3ada633ac196ea",
"assets/assets/parts/Electronic%2520Components%2520and%2520Breadboard/BasicElectronicsKit.png": "c604c8cfe42491833fae0bf0f35b5b7b",
"assets/assets/parts/Electronic%2520Components%2520and%2520Breadboard/25W%2520230V%2520Soldering%2520Iron%2520Model-GOLD.jpg": "e7278822e3d8c9db46311f1010620ce1",
"assets/assets/parts/Electronic%2520Components%2520and%2520Breadboard/12%2520x%252018%2520CM%2520Universal%2520PCB%2520Prototype%2520Board%2520Double-Sided.png": "ac70b888796d1b25853525f56f7c9f8f",
"assets/assets/parts/Electronic%2520Components%2520and%2520Breadboard/Solder%2520Wire%2520(45gm).png": "916fce8b9337f6e673c255bcdaa97bbe",
"assets/assets/parts/Electronic%2520Components%2520and%2520Breadboard/20%2520x%252030%2520CM%2520Universal%2520PCB%2520Prototype%2520Board%2520Double-Sided.jpg": "9fa1f9df6eaf776298243e66687c273e",
"assets/assets/parts/Electronic%2520Components%2520and%2520Breadboard/Resistors%2520Box.png": "e547a2fb3816ab9b00461ae79d5ca074",
"assets/assets/parts/Electronic%2520Components%2520and%2520Breadboard/5mm%25205537%2520LDR%2520Light%2520Dependent%2520Resistor10-20K.png": "909118d2cdea43fe697389accb17295d",
"assets/assets/parts/Electronic%2520Components%2520and%2520Breadboard/5V%2520Active%2520Electromagnetic%2520Buzzer.jpg": "82696ca35b188ebb54385800bd1bacb1",
"assets/assets/parts/Electronic%2520Components%2520and%2520Breadboard/3.3V5V%2520MB102%2520Breadboard%2520Power%2520Supply%2520Module.jpg": "725bd0e96da69b4ac42e8350d2ccd118",
"assets/assets/parts/Electronic%2520Components%2520and%2520Breadboard/8%2520x%252012%2520CM%2520Universal%2520PCB%2520Prototype%2520Board%2520Double-Sided.jpg": "ff2ea87c8e542b067b5b6cd4423d962d",
"assets/assets/parts/Electronic%2520Components%2520and%2520Breadboard/GL-12%2520830%2520Points%2520Solderless%2520Breadboard.png": "e9c081a54fb68e86e7b6f317fd23c5fe",
"assets/assets/parts/Electronic%2520Components%2520and%2520Breadboard/SolderWire%25201Meter(10gm).png": "a48276be0805084306d69ae66ff69869",
"assets/assets/parts/Electronic%2520Components%2520and%2520Breadboard/170%2520pts%2520Mini%2520Breadboard%2520SYB-170%2520White.png": "4f546046a5b64b497e5fff63d038712f",
"assets/assets/parts/Electronic%2520Components%2520and%2520Breadboard/3V%2520Active%2520Electromagnetic%2520Buzzer.jpg": "82696ca35b188ebb54385800bd1bacb1",
"assets/assets/parts/Electronic%2520Components%2520and%2520Breadboard/XD-42%25205V3.3V%2520Dual%2520Channel%2520Solderless%2520Breadboard%2520Power%2520Supply%2520Module.jpg": "4440c2ff93e01e7491ff3b21a172fd99",
"assets/assets/parts/Electronic%2520Components%2520and%2520Breadboard/Soldering%2520Paste%2520(15g).jpg": "2414ad8c4f40bf18e0a24e42c3d87675",
"assets/assets/parts/Electronic%2520Components%2520and%2520Breadboard/ZY-201%2520830%2520Points%2520Solderless%2520Breadboard.jpg": "2aa7d98f12102e9d832d701c42a31e5f",
"assets/assets/parts/Electronic%2520Components%2520and%2520Breadboard/Solderless%2520Breadboard%2520400%2520Point.jpg": "20edc7a20e6b8c396bf4e0e4cc472857",
"assets/assets/parts/Dev_Boards/LilyPad%2520328%2520ATmega328P%2520Main%2520Board%252016M%2520Compatible%2520with%2520Arduino.png": "c1285e8d7859a7394dcf6f54a7dedbbd",
"assets/assets/parts/Dev_Boards/Raspberry%2520Pi%2520Camera%2520Module%25203%2520Wide.png": "3146084cfb5e8adfd17d57e987627f11",
"assets/assets/parts/Dev_Boards/Transparent%2520Acrylic%2520Case%2520Shell%2520Enclosure%2520Gloss%2520Box%2520For%2520Arduino%2520UNO%2520R3.png": "da4096976497b15c89a57a943a3080b7",
"assets/assets/parts/Dev_Boards/Official%2520Raspberry%2520Pi%25203%2520Model%2520B+.png": "1b9a716fde91f97caae39d15a2d74668",
"assets/assets/parts/Dev_Boards/Pro%2520Mini%2520ATMEGA328P%25205V16M%2520Blue_Standard%2520Version.png": "5439252312a2156e42aaeb7d48e3dba1",
"assets/assets/parts/Dev_Boards/Atmega16U2%2520Mega%25202560%2520R3%2520Improved%2520Version%2520CH340G.png": "db5b488d6061f80da865c0152a01c761",
"assets/assets/parts/Dev_Boards/Leonardo%2520R3%2520Board%2520Micro-USB%2520compatible%2520with%2520Arduino.png": "45cbe5d7dee5949fa4cc19da105eed1a",
"assets/assets/parts/Dev_Boards/Transparent%2520Injection%2520molded%2520Case%2520Shell%2520Enclosure%2520Gloss%2520Box%2520For%2520Arduino%2520UNO%2520R3-Good%2520quality.png": "b1ae56868765ac423074c947aa08236f",
"assets/assets/parts/Dev_Boards/Uno%2520R3%2520Board%2520without%2520Cable%2520compatible%2520with%2520Arduino.png": "b1be8af81d26bd02542f1c57123b9b64",
"assets/assets/parts/Dev_Boards/Raspberry%2520Pi%25205%2520Model%25208GB.png": "cb3f01d54b8468dae0c316cbedb72bda",
"assets/assets/parts/Dev_Boards/Raspberry%2520Pi%25205%2520Model%25204GB.png": "c48e942a4d45945300e44428d25d6b37",
"assets/assets/parts/Dev_Boards/ATmega328P%2520CH340%2520Module%2520with%25200.91Inch%2520OLED%2520Display%2520Development%2520Board%2520TYPE-C.png": "07af41075f6fb61c3157be533baff5d2",
"assets/assets/parts/Dev_Boards/Nano%2520CH340%2520Chip%2520Board%2520Without%2520USB%2520Cable%2520Compatible%2520with%2520Arduino%2520(Soldered).png": "986f8b06bdbcc4116c0fd3c3e70ddb96",
"assets/assets/parts/Dev_Boards/Arduino%2520UNO%2520R3%2520SMD%2520ATmega328%2520Compatible%2520Board.png": "d7462169031ff4328befe722a5f86781",
"assets/assets/parts/Dev_Boards/Raspberry%2520Pi%25204%2520Model%2520B%2520with%25202%2520GB%2520RAM.png": "3476d1c2ba50f5b3e2adb829e002cee8",
"assets/assets/parts/Dev_Boards/Raspberry%2520Pi%25204%2520Model-B%2520with%25208%2520GB%2520RAM.png": "d54742dc600bd5a359f92844b5352022",
"assets/assets/parts/Dev_Boards/Unsoldered%2520Nano%2520V3.0%2520ATmega328P%25205V%252016MHz%2520CH340.png": "590c26c3ebe136b09fd7a4842754518e",
"assets/assets/parts/Dev_Boards/Raspberry%2520Pi%25205%2520Model%25202GB.png": "c48e942a4d45945300e44428d25d6b37",
"assets/assets/parts/Dev_Boards/Raspberry%2520Pi%2520Pico.png": "eebb763d49aa3fe502fd16777a151f16",
"assets/assets/parts/Dev_Boards/Raspberry%2520Pi%2520Zero%2520v1.3%2520Development%2520Board.png": "38f1a935c607ca6f60be23f15e9f0a40",
"assets/assets/parts/Dev_Boards/Raspberry%2520Pi%25204%2520Model-B%2520with%25204%2520GB%2520RAM.png": "5b1c8c7f81ceedccbcebab01a0c38c26",
"assets/assets/parts/Electronic%2520modules%2520and%2520display/0.96in%25206%2520pin%2520OLED%2520Display.jpeg": "cfe865aae01cdfecb28690594050caed",
"assets/assets/parts/Electronic%2520modules%2520and%2520display/16x2%2520LCD%2520I2C%2520Interface%2520Adapter%2520Module.png": "2fe7046164e873f6b81405f83274f1dc",
"assets/assets/parts/Electronic%2520modules%2520and%2520display/Waveshare%25204.3%2520Inch%2520Capacitive%2520Touch%2520Display%2520for%2520Raspberry%2520Pi%2520800480.jpg": "1f63220b81b9447cd88f90dc73b3894c",
"assets/assets/parts/Electronic%2520modules%2520and%2520display/Digital%2520Multimeter%2520with%2520Probes.png": "42de5c0a93f309e2c86c1ad50c67b0d5",
"assets/assets/parts/Electronic%2520modules%2520and%2520display/Waveshare%25207%2520Inch%2520Capacitive%2520HDMI%2520LCD%2520Display%2520(H)%2520with%2520Case%25201024%25C3%2597600.jpg": "7f036b966dc3f9ca8bd85ffadacadbde",
"assets/assets/parts/Electronic%2520modules%2520and%2520display/2.4%2520Inch%2520Touch%2520Screen%2520TFT%2520Display%2520Shield%2520for%2520Arduino%2520UNO%2520Mega%2520%25202.4%2520Inch%2520TFT%2520Display%2520with%2520Stylus%2520Pen.png": "b6701d2a66b622792dd3f23bf4b75ee0",
"assets/assets/parts/Electronic%2520modules%2520and%2520display/LM2596%2520DC-DC%2520Buck%2520Converter%2520Adjustable%2520Step%2520Down%2520Power%2520Supply%2520Module.jpg": "8c6d8066a0f1cf19e34823fe55508d0a",
"assets/assets/parts/Electronic%2520modules%2520and%2520display/16x2%25201602%2520LCD%2520Display%2520(Yellow%2520%2520Green).png": "7236fe8298b2f7fe3821eefa01913244",
"assets/assets/parts/Electronic%2520modules%2520and%2520display/Waveshare%252010.1%2520Inch%2520Capacitive%2520HDMI%2520LCD%2520Display%2520(B)%2520with%2520Case%25201280%25C3%2597800%2520(Without%2520Power%2520Adapter).jpg": "300aaa617cddb9a114e59b37a5daf851",
"assets/assets/parts/Electronic%2520modules%2520and%2520display/Waveshare%252010.1%2520Inch%2520Capacitive%2520Touch%2520Screen%2520LCD%2520(H)%2520with%2520Case%2520(Without%2520Power%2520Adapter).jpg": "9ff25b7cdc81de1702304e92ad3b62f4",
"assets/assets/parts/Electronic%2520modules%2520and%2520display/16x2%2520LCD%2520Display%2520With%2520Blue%2520Backlight.png": "77eea3e32bdd6a71716f5ccefc1683f3",
"assets/assets/parts/IOT%2520&%2520Wireless/HC-05%2520Bluetooth%2520Module%25206pin%2520with%2520Button.png": "f2586147f0f1cc7c8b7ee59998d899d7",
"assets/assets/parts/IOT%2520&%2520Wireless/ESP8266%2520CH340%2520NodeMCU%2520Module.jpg": "03d19e27690c28608361e4ee587f5b4c",
"assets/assets/parts/IOT%2520&%2520Wireless/NRF24L01%2520PA%2520LNA%2520SMA%2520Wireless%2520Transceiver.jpg": "9d00de779e743e8a54554591c37b6571",
"assets/assets/parts/IOT%2520&%2520Wireless/ESP8266%2520CP2102%2520NodeMCU%2520Module.jpg": "e1daa535917322904773f69f6b845f2d",
"assets/assets/parts/IOT%2520&%2520Wireless/ESP32%2520CAM%2520MB%2520Programming%2520Module%2520(Base%2520Board)%2520for%2520ESP32%2520CAM%2520Development%2520Board.png": "679306fcd96bbcf801e2aecb14c70811",
"assets/assets/parts/IOT%2520&%2520Wireless/D1%2520Mini%2520V2%2520Node%2520Mcu%25204%2520bytes%2520Lua%2520WIFI%2520Development%2520Board%2520ESP8266.png": "2206b0040cb2b44d023fef47de651692",
"assets/assets/parts/IOT%2520&%2520Wireless/%255BTYPE-C%2520%255D%2520ESP32%252030%2520Pin%2520CH340%2520Development%2520Board%2520WiFi%2520+%2520Bluetooth%2520Ultra-Low%2520Power%2520Dual%2520Core.png": "7a9bc2aae1d7c340d695d423eecc52b5",
"assets/assets/parts/IOT%2520&%2520Wireless/ESP32%252038%2520Pin%2520WROOM32%2520Development%2520Board%2520WiFi%2520+%2520Bluetooth%2520Ultra-Low%2520Power%2520Consumption%2520Dual%2520Core.png": "9bd124be282009fc6393ccb7684c563e",
"assets/assets/parts/IOT%2520&%2520Wireless/NRF24L01%25202.4GHz%2520Antenna%2520Wireless%2520Transceiver%2520Module.png": "52efe9c6fd60dcbd5f8810e2616a089c",
"assets/assets/parts/IOT%2520&%2520Wireless/ESP32%2520CAM%2520WiFi%2520Module%2520Bluetooth%2520with%2520OV2640%2520Camera%2520Module%25202MP%2520For%2520Face%2520Recognization.png": "ff8a73b97c5670ef230570d10606fb79",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
