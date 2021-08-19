$(document).ready( function () {


	listingsData = [
		{
		  "category": "Air Conditioning",
		  "subcategory": "Installation, Servicing, Air Quality",
		  "name": "J and D Heating and AC",
		  "address": "5631 Halifax Ave # A, Fort Myers, FL 33912",
		  "addressurl": "https://www.google.com/maps/place/J+%26+D+Heating+%26+AC+Inc/@26.531381,-81.859907,16z/data=!4m5!3m4!1s0x0:0x4ab497877b883b49!8m2!3d26.531381!4d-81.8599067?hl=en",
		  "phone": "239-415-4271",
		  "email": "service@janddac.com",
		  "website": "https://janddac.com/",
		  "image": "1-biG7pz5V0pkwBXKC7ezFtTHhtL_p4Pq",
		  "comment": "Family owned and operated, J&D Heating and Air Conditioning is operated by Babcock Ranch resident Shannon Hazlett. They offer multiple services including 10 year labor warranty packages."
		},
		{
		  "category": "Air Conditioning",
		  "subcategory": "Installation, Servicing, Maintenance",
		  "name": "Purtz Air Service",
		  "address": "40481 Little Farm Road, Punta Gorda, Fl. 33901",
		  "addressurl": "https://www.google.com/maps/place/Purtz+Air+Service,+Inc./@26.7895585,-81.7900107,16z/data=!4m5!3m4!1s0x88db667c6b6eaaab:0x601baf600b8a30e2!8m2!3d26.7891658!4d-81.7856441?hl=en",
		  "phone": "239-340-8852",
		  "email": "ClaytonP@purtzair.com",
		  "website": "https://www.purtzair.com/",
		  "image": "1qXAWWpyMKfbe6SHail26vJTFA5Wdo3Rq",
		  "comment": "We are a small, locally owned company whose owner is native to Southwest Florida. We are committed to providing honest and fair pricing, and delivering unsurpassed customer service."
		},
		{
		  "category": "Appliance Repair",
		  "subcategory": "",
		  "name": "D.R. Appliances Repair Service",
		  "address": "2213 NE 33rd Ln, Cape Coral, FL 33909",
		  "addressurl": "https://www.google.com/maps/place/D.R.+Appliances+Repair+Services/@26.7184838,-81.938197,14.75z/data=!4m5!3m4!1s0x88db40baaaaaaaab:0x33fcc3478f0b1c7e!8m2!3d26.7174827!4d-81.9279474",
		  "phone": "239-214-0948",
		  "email": "service@drappliances.com",
		  "website": "https://drappliances.com/",
		  "image": "1K64siFlthlCff5qGWEYOiKoxh3pSabn4",
		  "comment": "Nobody can beat our Appliance Repair Professionalism. We estimate by the job, not by the hour. You can always count on us to take care of your appliance repair needs."
		},
		{
		  "category": "Appliance Repair",
		  "subcategory": "",
		  "name": "Baxter Appliance",
		  "address": "",
		  "addressurl": "",
		  "phone": "239-209-3712",
		  "email": "BaxterAppliance@gmail.com",
		  "website": "https://www.facebook.com/BaxterAppliance/",
		  "image": "1v0sFWIlOgRuLRYF2_YrRNd1rP0nmXUyB",
		  "comment": "Expert appliance repair on all makes and models. Where quality repair meets affordability."
		},
		{
		  "category": "Arts and Crafts",
		  "subcategory": "Quilting",
		  "name": "Freebird Quilting",
		  "address": "Babcock Ranch, FL 33982",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "678-429-4741",
		  "email": "robin.kinley@gmail.com",
		  "website": "",
		  "image": "16pl6qw8sgSgngEDU1-4cOxRYBbHsC9sE",
		  "comment": "Robin Kinley is a Babcock Ranch resident offering longarm quilting services for quilters and also offers quilting lessons."
		},
		{
		  "category": "Automotive",
		  "subcategory": "Detailing",
		  "name": "A to Klean Auto Detailing and Home Cleaning",
		  "address": "Babcock Ranch, FL 33982",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "941-979-0848",
		  "email": "atoklean@gmail.com",
		  "website": "https://www.facebook.com/atocleanautodetailing/",
		  "image": "10EMgd-vTr_UfNFYxz89jA1C7p7tuIYTx",
		  "comment": "Aleem Khan, a Babcock Ranch resident, details cars and cleans homes here in the ranch and currently has several customers with very positive reviews."
		},
		{
		  "category": "Automotive",
		  "subcategory": "Maintenance, Repair",
		  "name": "Rob to the Rescue Mobile Auto Repair",
		  "address": "",
		  "addressurl": "",
		  "phone": "239-887-0410",
		  "email": "robtotherescue@yahoo.com",
		  "website": "https://www.robtotherescue.com/",
		  "image": "1CiBepCrgdaiUwWqneMxAA84E4m4LATFN",
		  "comment": "Family owned and operated with over 15 years experience in the automotive industry. I create a stress and worry free environment for my customers by coming directly to your location. Whether you are at home, work or stuck on the side of the road, you can get your vehicle serviced or repaired at your convenience."
		},
		{
		  "category": "Automotive",
		  "subcategory": "Body work, Collision, Painting",
		  "name": "Service King Collision Repair Centers",
		  "address": "12490 Metro Pkwy, Fort Myers, FL 33966",
		  "addressurl": "https://www.google.com/maps/place/Service+King+Collision+Fort+Myers/@26.5621668,-81.8666718,14z/data=!4m5!3m4!1s0x88db6a38ec53597b:0xb92797487ee0241e!8m2!3d26.5611626!4d-81.8536698?hl=en",
		  "phone": "239-332-4477",
		  "email": "",
		  "website": "https://www.serviceking.com/locations/service-king-fort-myers",
		  "image": "1UCyx7f4InZcB4ggJ3U26frlFxHP4MASb",
		  "comment": "Service King of Fort Myers has Gold Class Certification from I-CAR, making it an elite collision repair center."
		},
		{
		  "category": "Automotive",
		  "subcategory": "Maintenance, Repair",
		  "name": "Tire Choice Auto Service",
		  "address": "9002 Rolfes Road, Fort Myers, FL 33966",
		  "addressurl": "https://www.google.com/maps/place/Tire+Choice+Auto+Service+Centers/@26.6120449,-81.8098586,17z/data=!3m1!4b1!4m5!3m4!1s0x88db6ba6eba0f05d:0xfa0d5bcda6ae1803!8m2!3d26.6120374!4d-81.8078351?hl=en",
		  "phone": "239-221-6274",
		  "email": "",
		  "website": "https://locations.thetirechoice.com/fl/fort-myers/9002-rolfes-road.html",
		  "image": "1rSTP2B1OLuZXy4F1Y1JCNYYog6jbmbeJ",
		  "comment": "The Tire Choice is the nation’s fourth largest independent tire dealer. The Tire Choice in Fort Myers, FL provides scheduled maintenance on your vehicle for routine and preventative vehicle care."
		},
		{
		  "category": "Automotive",
		  "subcategory": "Body work, Collision, Towing",
		  "name": "West Coast Collision",
		  "address": "901 Country Club Blvd, Cape Coral, FL 33990",
		  "addressurl": "https://www.google.com/maps/place/West+Coast+Collision/@26.6346341,-81.9561017,15z/data=!4m5!3m4!1s0x88db413448a9adf5:0x51ce58a19c61b739!8m2!3d26.6359181!4d-81.9497198?hl=en",
		  "phone": "239-574-1505",
		  "email": "chuck@westcoastcollision.net",
		  "website": "https://www.westcoastcollision.net/",
		  "image": "1p5URd2VHDsXP6jqmL6bH4d42tv3UWNoQ",
		  "comment": "West Coast Collision has been providing your community with top-notch collision repair and towing services for over 30 years."
		},
		{
		  "category": "Automotive",
		  "subcategory": "ad_full_width",
		  "name": "Amazon Ad",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "https://www.amazon.com/s/ref=as_li_ss_tl?url=search-alias=automotive&field-keywords=&linkCode=ll2&tag=apontares-20&linkId=58babc58a46787168918331ab7935736&language=en_US",
		  "image": "10Oom-oElG1L5hCPPweZYDHsGgQLq_lO2",
		  "comment": ""
		},
		{
		  "category": "Beauty and Salon",
		  "subcategory": "Haircuts, Styling, Skin Care",
		  "name": "Darla Smith",
		  "address": "",
		  "addressurl": "",
		  "phone": "239-849-5554",
		  "email": "",
		  "website": "",
		  "image": "1FCNCoDnkFg0VRCUj-FAJQLuTtEUAQhhV",
		  "comment": "Darla operates under both \"Sun Streaks Salon\" and \"BAREOLOGY\" providing men's and women's haircuts, microderm, facials, and many other skin care services."
		},
		{
		  "category": "Beauty and Salon",
		  "subcategory": "Makeup, Hair, Styling",
		  "name": "Denise Marie Beauty",
		  "address": "Babcock Ranch, FL 33982",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "407-476-7078",
		  "email": "Denise@DeniseMarieBeauty.com",
		  "website": "https://www.denisemariebeauty.com/",
		  "image": "1un8Szzow1CiuKjlzDEgiTyGE3jE25P5o",
		  "comment": "Denise Owen, a Babcock Ranch resident, has been in the bridal beauty industry for half a decade. She is licensed and insured in makeup (Bridal/Special Event)and hair/braid artistry."
		},
		{
		  "category": "Beauty and Salon",
		  "subcategory": "Haircuts, Styling, Color",
		  "name": "Fiore+Ela Salon",
		  "address": "9377 6 Mile Cypress Pkwy, Ste 115, Fort Myers, FL 33966",
		  "addressurl": "https://www.google.com/maps/place/Fiore+%2B+Ela+Salon+and+Beauty+Bar/@26.6060411,-81.8117295,17z/data=!3m1!4b1!4m5!3m4!1s0x88db6b08457467c3:0xbbc09c75807a92bb!8m2!3d26.6060411!4d-81.8095408",
		  "phone": "239-931-4478",
		  "email": "",
		  "website": "https://www.fioreandela.com/",
		  "image": "1MOAidyDoEDB41A4jzxNhqL7kWPl0e4uR",
		  "comment": "Jackie Jordan, a Babcock Ranch resident, specializes in custom colors, balayage, precision haircuts and styles for every occasion! She is a Level 5 Stylist and Matrix Educator."
		},
		{
		  "category": "Beauty and Salon",
		  "subcategory": "Haircuts, Styling, Color",
		  "name": "Paige Leah Styles",
		  "address": "1105 Taylor St, Punta Gorda, FL 33950",
		  "addressurl": "https://www.google.com/maps/place/Paige+Leah+Styles+LLC/@26.928654,-82.0494743,16z/data=!4m5!3m4!1s0x88db572cec45b33b:0x75605cf4090728b5!8m2!3d26.9284541!4d-82.045324?hl=en",
		  "phone": "941-473-6027",
		  "email": "paigeleahstyles@yahoo.com",
		  "website": "https://www.paigeleahstyles.com/",
		  "image": "1LKqecyajY6LOtgkcSYWvaPhIzCcwh1fo",
		  "comment": "Specializing in low maintenance dimensional color, natural beaded row extensions, razor cutting, and organic products."
		},
		{
		  "category": "Beauty and Salon",
		  "subcategory": "Haircuts, Styling, Color",
		  "name": "Rolling With Scissors",
		  "address": "",
		  "addressurl": "",
		  "phone": "941-626-1400",
		  "email": "RWS@RollingWithScissors.com",
		  "website": "https://rollingwithscissors.com/",
		  "image": "1kUvy7PkMxM6T-n1mXmA7bFNI5PO7OA4I",
		  "comment": "Rolling With Scissors is a mobile hair salon offering professional hair services in a brilliantly convenient way. Owned and operated by Jon and Nancy Jo Haigwood, based in Lake Suzy, Florida, we service clients in Lake Suzy, Punta Gorda, Boca Grande, Babcock Ranch, Florida and surrounding areas."
		},
		{
		  "category": "Dentist",
		  "subcategory": "Dental Cleaning, Cosmetic, Surgery, Emergencies",
		  "name": "Dental Care at Verandah",
		  "address": "12021 Palm Beach Blvd, Fort Myers, FL 33905",
		  "addressurl": "https://www.google.com/maps/place/Dental+Care+at+Verandah/@26.7006425,-81.761247,17z/data=!3m1!4b1!4m5!3m4!1s0x88db6f84b3349c55:0xa3eaadb688e0ceff!8m2!3d26.7006377!4d-81.759053?hl=en",
		  "phone": "239-201-4559",
		  "email": "",
		  "website": "https://www.dentalcareatverandah.com/",
		  "image": "1nNwIjP8lfAuBug7Or87TmBOVZy3n21zR",
		  "comment": "Welcome to Dental Care at Verandah of Fort Myers, Florida! We are dedicated to providing the Fort Myers area with the highest quality of dental care for your oral health needs."
		},
		{
		  "category": "Dentist",
		  "subcategory": "Dental Cleaning, Cosmetic, Teeth Whitening",
		  "name": "Gulfshore Dental",
		  "address": "11841 Palm Beach Blvd #115, Fort Myers, FL 33905",
		  "addressurl": "https://www.google.com/maps/place/Gulfshore+Dental/@26.6989402,-81.7640499,17z/data=!3m2!4b1!5s0x88db6f20a543c1d9:0x6bad2f178cba0fc5!4m5!3m4!1s0x0:0xa641d8fbe9956701!8m2!3d26.6989342!4d-81.7618552?hl=en",
		  "phone": "239-694-7702",
		  "email": "smiles@gulfshoredental.com",
		  "website": "http://gulfshoredental.com/",
		  "image": "1PXlsbmSZUV7wPoDSusmkzn3a0wGP_ShA",
		  "comment": "Dr. Nirav Patel provides comprehensive general dentistry, cosmetic dentistry, and restorative dentistry at our established dental practice."
		},
		{
		  "category": "Dentist",
		  "subcategory": "Dental Cleaning, Cosmetic, Teeth Whitening",
		  "name": "Legacy Dental Studio",
		  "address": "12630 New Brittany Blvd, Fort Myers, FL 33907",
		  "addressurl": "https://www.google.com/maps/place/Legacy+Dental+Studio/@26.5590762,-81.8833214,17z/data=!3m1!4b1!4m5!3m4!1s0x88db3ff41af4c023:0x34d2f5b5bc5b914c!8m2!3d26.5590714!4d-81.8811274?hl=en",
		  "phone": "239-275-7722",
		  "email": "",
		  "website": "https://www.legacydentalstudio.com/",
		  "image": "1rxQAP32Vvt-Muk7cWxyacd7zuNiskoCM",
		  "comment": "Whether your dental needs are a complete exam and cleaning, a full-mouth restoration, dentures or anything in between, we promise to provide you with exceptional care."
		},
		{
		  "category": "Electrician",
		  "subcategory": "Electrical",
		  "name": "Sergeant's Electric",
		  "address": "1075 Innovation Ave. Unit 111, North Port, FL 34289",
		  "addressurl": "https://www.google.com/maps/place/Sergeant's+Electric/@27.0874287,-82.1592366,17z/data=!3m1!4b1!4m5!3m4!1s0x88c352d14ec6940b:0xd3ddea9ef085119c!8m2!3d27.0874239!4d-82.1570426?hl=en",
		  "phone": "941-373-5658",
		  "email": "",
		  "website": "https://www.sgtelect.com/",
		  "image": "1xEKtMz_1WhjApRdIX1nwWPBBe0S-e9D3",
		  "comment": "Your Source for Electrical Repairs. FREE Estimates | 24/7 Emergency Service | Low Prices"
		},
		{
		  "category": "Electrician",
		  "subcategory": "Electrical",
		  "name": "Southwest Florida Electric",
		  "address": "2565 South St, Fort Myers, FL 33901",
		  "addressurl": "https://www.google.com/maps/place/Southwest+Florida+Electric+Inc./@26.630105,-81.860765,16z/data=!4m5!3m4!1s0x0:0x16fce6e69f6ce1d8!8m2!3d26.6301051!4d-81.8607651?hl=en-US",
		  "phone": "239-745-5020",
		  "email": "office@swflelectric.com",
		  "website": "https://www.swflelectric.com/",
		  "image": "18eIloOVShrHoYJf-tqWSwLitJO3eoLtc",
		  "comment": "4.8 star rating on Google reviews. Southwest Florida's #1 Electrician Choice! No job is too big or too small."
		},
		{
		  "category": "Entertainment",
		  "subcategory": "Wildlife",
		  "name": "Babcock Ranch Eco Tours",
		  "address": "8502 FL-31, Punta Gorda, FL 33982",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch+Eco+Tours/@26.8553828,-81.7761477,14z/data=!4m5!3m4!1s0x88db63caec6284dd:0x70c7e2b359c97f39!8m2!3d26.857881!4d-81.7596288",
		  "phone": "800-500-5583",
		  "email": "info@BabcockRanchEcoTours.com",
		  "website": "https://babcockranchecotours.com/",
		  "image": "1e2_5Nnw-MNRf1EAMIN_v5jmMZ9MDfkWe",
		  "comment": "Discover the natural heart of Florida on a narrated 90 minute eco-tour. View alligators, birds, wild hogs and more. We are just 6 miles from Babcock Ranch."
		},
		{
		  "category": "Entertainment",
		  "subcategory": "Wildlife",
		  "name": "Octagon Wildlife Sanctuary",
		  "address": "41660 Horseshoe Rd, Punta Gorda, FL 33982",
		  "addressurl": "https://www.google.com/maps/place/Octagon+Wildlife+Sanctuary/@26.7871327,-81.7699815,16.25z/data=!4m5!3m4!1s0x88db65cddfaee9d5:0x6af6e6a0298b4a9e!8m2!3d26.787025!4d-81.766253",
		  "phone": "239-543-1130",
		  "email": "support@octagonwildlife.org",
		  "website": "http://www.octagonwildlife.org/",
		  "image": "1YhbkMVj_3sgUqVl7u2HsTNCAHF_QYTOT",
		  "comment": "Just 1.5 miles from Babcock Ranch, our mission is to provide a healthy recovery and living environment for abandoned and abused exotic wildlife."
		},
		{
		  "category": "Featured Products",
		  "subcategory": "ad_listing",
		  "name": "Amazon Ad",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "https://www.amazon.com/All-new-Ring-Alarm-5-piece-kit/dp/B07ZDTXJ93/ref=as_li_ss_tl?dchild=1&keywords=All-new+Ring+Alarm+5-piece+kit+(2nd+Gen)&qid=1587244714&sr=8-5&linkCode=ll1&tag=apontares-20&linkId=f01f4685b152a6b3823b9f20f3ea9ca4&language=en_US",
		  "image": "1n5fhcoDy12hgfmSYUfC4XFPWz5b8LR3O",
		  "comment": "<strong>All-New Ring Alarm 5-Piece Kit (2nd Gen)</strong><br />Put whole-home security at your fingertips with Ring Alarm, a do-it-yourself alarm system with optional 24/7 professional monitoring."
		},
		{
		  "category": "Featured Products",
		  "subcategory": "ad_listing",
		  "name": "Amazon Ad",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "https://www.amazon.com/Garage-Door-Bottom-Weather-T-Style/dp/B00VIQXJC6/ref=as_li_ss_tl?dchild=1&keywords=Garage+door+bottom+weather+seal&qid=1587244892&sr=8-7&linkCode=ll1&tag=apontares-20&linkId=ac820dbcf35270ad9c83e516cc4df586&language=en_US",
		  "image": "12LaWH_vhrhbQCP-CWlVCB36yKKax6V_d",
		  "comment": "<strong>Garage Door Bottom Weather Seal T-Style</strong><br />These 3 3/4\" seals fit garage doors manufactured by many companies, conform to uneven floors with over 1 inch compression, and the contact ensures a tight seal."
		},
		{
		  "category": "Featured Products",
		  "subcategory": "ad_listing",
		  "name": "Amazon Ad",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "https://www.amazon.com/Siemens-FS140-Whole-House-Protection/dp/B013WINMK6/ref=as_li_ss_tl?dchild=1&keywords=Siemens+FS140+Whole+House+Surge+Protection&qid=1587244385&sr=8-1&linkCode=ll1&tag=apontares-20&linkId=db2a7cf14ec261cc7e128b7c84349442&language=en_US",
		  "image": "1pXczrfugCHF5JivyRdNdlmdxtPdWJaaO",
		  "comment": "<strong>Siemens FS140 Whole Home Surge Protector</strong><br />With FirstSurge commercial class protection, you will have peace of mind that your home will always be surge protected."
		},
		{
		  "category": "Featured Products",
		  "subcategory": "ad_listing",
		  "name": "Amazon Ad",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "https://www.amazon.com/Spectracide-Terminate-Termite-Detection-Killing/dp/B00AA8WVLI/ref=as_li_ss_tl?dchild=1&keywords=Spectracide+Terminate+Termite+Detection+&+Killing+Stakes2&qid=1587244098&sr=8-1&linkCode=ll1&tag=apontares-20&linkId=84552aa053d929f04622d29452d954f7&language=en_US",
		  "image": "1Ki6ELRisFvSoffkoo6ty40_sE1ePlI5o",
		  "comment": "<strong>Spectracide Terminate Termite Detection & Killing</strong><br />TWO TERMITE PRODUCTS IN ONE: Pop-up indicators detect termite activity, and the stakes kill foraging termites. Installs in minutes."
		},
		{
		  "category": "Finance",
		  "subcategory": "Mortgage",
		  "name": "Community Lending",
		  "address": "8191 College Pkwy, Ste 203, Fort Myers, FL 33919",
		  "addressurl": "https://www.google.com/maps/place/Community+Lending+(Powered+by+Hamilton+Home+Loans)/@26.5562893,-81.8929501,17z/data=!4m14!1m8!3m7!1s0x88db3f8da80595df:0xa2d1c52d4bdce4ed!2s8191+College+Pkwy+%23203,+Fort+Myers,+FL+33919!3b1!8m2!3d26.5562845!4d-81.8907561!10e3!3m4!1s0x88db3f8da712d70d:0xeb7c299f7dc9edc7!8m2!3d26.5562845!4d-81.8907561?hl=en",
		  "phone": "239-634-7362",
		  "email": "stacy@communitylendingfl.com",
		  "website": "https://communitylendinghgf.com/",
		  "image": "1wTNuO4qZ4nn5xtThTHKFAyxl0rXCLVU0",
		  "comment": "Babcock Ranch resident, Stacy Lomonaco is a licensed Florida Mortgage Loan Originator with Community Lending."
		},
		{
		  "category": "Finance",
		  "subcategory": "Mortgage",
		  "name": "Movement Mortgage",
		  "address": "Babcock Ranch, FL 33982",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "239-634-9007",
		  "email": "Travis.marchand@movement.com",
		  "website": "https://movement.com/",
		  "image": "1sLHBVzvLkOXtw08KrPeRjf6n_DrknAKf",
		  "comment": "Travis Marchand, Babcock Ranch resident and local veteran works for Movement Mortgage as a veteran advocate Mortgage Loan Officer."
		},
		{
		  "category": "Finance",
		  "subcategory": "Investment",
		  "name": "Primerica Financial Services",
		  "address": "Babcock Ranch, FL 33982",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "561-601-1631",
		  "email": "dslobodow@primerica.com",
		  "website": "https://www.primerica.com/slobodow",
		  "image": "1Jt0vwuNHhjMTDSo3lvz8kpt05Y_kB3B4",
		  "comment": "Babcock Ranch resident Debra Slobodow is a Regional Vice President for Primerica, a full-service financial company that focuses on educating families on how to make, save, and invest their money."
		},
		{
		  "category": "Finance",
		  "subcategory": "Planning, Investment",
		  "name": "WorthyNest",
		  "address": "42881 Lake Babcock Drive #200, Punta Gorda, FL, 33982",
		  "addressurl": "https://www.google.com/maps/place/42881+Lake+Babcock+Dr,+Punta+Gorda,+FL+33982/@26.7837158,-81.749243,17z/data=!3m1!4b1!4m5!3m4!1s0x88db65b1c650fd67:0xa042c1205dab98a3!8m2!3d26.783711!4d-81.747049?hl=en",
		  "phone": "941-312-1045",
		  "email": "deb@worthynest.com",
		  "website": "https://www.worthynest.com/",
		  "image": "1l8nu6kZPmtA2k2D100_uqYhhD3LeSx5I",
		  "comment": "WorthyNest is a virtual fee-only, fiduciary wealth management firm based in Punta Gorda, FL that serves U.S. families nationally. Contact Deb Meyer for more information."
		},
		{
		  "category": "Food and Drink",
		  "subcategory": "Pizza",
		  "name": "DANTE'S COAL FIRED PIZZA",
		  "address": "900 SW Pine Island Rd, Cape Coral, FL 33991",
		  "addressurl": "https://www.google.com/maps/place/Dante's+Coal+Fired+Pizza/@26.6420026,-82.0079255,13.75z/data=!4m5!3m4!1s0x88db465ffa035bad:0x5e0ea642232e5eff!8m2!3d26.6416605!4d-81.9967639?hl=en",
		  "phone": "239-800-2112 ",
		  "email": "",
		  "website": "http://dantescoalfiredpizza.com/",
		  "image": "1lrN8bd5SP-MlA2p-Jy2yAH7Xg8DWzPsN",
		  "comment": "Coal Fired Pizza, Coal Fired Wings, Ribs, Sandwiches and more, located in Cape Coral, Florida."
		},
		{
		  "category": "Food and Drink",
		  "subcategory": "Pizza",
		  "name": "Downtown House of Pizza",
		  "address": "1520 Hendry Street, Fort Myers, Florida 33901",
		  "addressurl": "https://www.google.com/maps/place/Downtown+House+of+Pizza/@26.6439163,-81.8718241,17z/data=!3m1!4b1!4m5!3m4!1s0x88db41e30603a449:0xed1156ab764b9ff6!8m2!3d26.6439163!4d-81.8696354?hl=en",
		  "phone": "239-337-3467",
		  "email": "",
		  "website": "https://downtownhouseofpizza.com/",
		  "image": "1_c_XtBm-DzWKXMlZExKXH8-i08aTlqL9",
		  "comment": "The closest you can get to authentic New York-style pizza. Located in downtown Fort Myers. Great pizza at great prices."
		},
		{
		  "category": "Food and Drink",
		  "subcategory": "Chinese, Dim Sum",
		  "name": "Ginger Bistro",
		  "address": "4650 S Cleveland Ave #8, Fort Myers, FL 33907",
		  "addressurl": "https://www.google.com/maps/place/Ginger+Bistro/@26.593511,-81.8770479,16.25z/data=!3m1!5s0x88db402475ccafdd:0xb7a0bbba1a0304d0!4m5!3m4!1s0x88db4023f3b019ed:0xdd8752c32b6d6eed!8m2!3d26.5935461!4d-81.8740171?hl=en",
		  "phone": "239-689-3113",
		  "email": "",
		  "website": "",
		  "image": "1TDDCjyR45dBVPyEMZs1dugPoycTlzqDX",
		  "comment": "Good Chinese food is impossible to find in and around Fort Myers, but Ginger Bistro is as good as it gets without flying to New York City."
		},
		{
		  "category": "Food and Drink",
		  "subcategory": "Italian, Latin",
		  "name": "MiNa's Bistro",
		  "address": "4391 Colonial Blvd, Fort Myers, FL 33966",
		  "addressurl": "https://www.google.com/maps/place/MiNa's+Bistro/@26.6085317,-81.8264047,17z/data=!3m1!4b1!4m5!3m4!1s0x88db6aff8567611f:0x35ce460feef9638a!8m2!3d26.6085317!4d-81.824216?hl=en",
		  "phone": "239-225-1139",
		  "email": "",
		  "website": "http://www.minasbistro.com",
		  "image": "11HycjGsIerqcuiHKBA7BZcsRc15_vjHa",
		  "comment": "Mina's Bistro Italian & Latin Cuisine offers a variety of freshly made specialty foods in a casual atmosphere that includes a beautiful decor."
		},
		{
		  "category": "Food and Drink",
		  "subcategory": "Farm-to-Table",
		  "name": "Rosy Tomorrows Heritage Farm",
		  "address": "8250 Nalle Grade Rd, North Fort Myers, FL 33917",
		  "addressurl": "https://www.google.com/maps/place/Rosy+Tomorrows+Heritage+Farm,+8250+Nalle+Grade+Rd,+North+Fort+Myers,+FL+33917/@26.7553255,-81.8211097,15z/data=!4m2!3m1!1s0x88db662c9919ca81:0xb29b70db702b1042?hl=en",
		  "phone": "239-567-6000",
		  "email": "info@rosy-tomorrows.com",
		  "website": "https://www.rosy-tomorrows.com",
		  "image": "1vw-25K2OJWyJGZthiTOducIufjyCwc1o",
		  "comment": "We believe the best dining experiences are ones that connect us to each other, and to the surrounding land."
		},
		{
		  "category": "Food and Drink",
		  "subcategory": "Thai, Japanese",
		  "name": "Thai Udon Cafe",
		  "address": "10952 Eagle Village Dr, Fort Myers, FL 33913",
		  "addressurl": "https://www.google.com/maps/place/Thai+Udon+Cafe+Estero/@26.4517818,-81.775894,17z/data=!3m1!4b1!4m5!3m4!1s0x88db114df8cb42e9:0xb9f35581cbed4fc1!8m2!3d26.451777!4d-81.7737053?hl=en",
		  "phone": "239-673-6868",
		  "email": "info@thaiudoncafe.com",
		  "website": "https://thaiudoncafe.com/",
		  "image": "1oZV3wo2g0NqVi_jJ4rjIKkSTa6neVomH",
		  "comment": "Thai Udon Cafe has established itself as the finest Japanese and Thai restaurant in the area. "
		},
		{
		  "category": "Food and Drink",
		  "subcategory": "BBQ",
		  "name": "The Big Green Egg Guy",
		  "address": "Babcock Ranch, FL 33982",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "770-313-1774",
		  "email": "",
		  "website": "https://www.facebook.com/BigGreenEggGuy/",
		  "image": "1nwOB8HMgZDJruMB-_cmG2-Jcl2l417t1",
		  "comment": "Paul McCreery, Babcock Ranch's own The Big Green Egg Guy, provides BBQ and other foods to Babcock Ranch neighbors. Check out the menu on his facebook page and text your orders to the cell number above. Provide your email to get a PayPal invoice for easy payment."
		},
		{
		  "category": "Golf Carts",
		  "subcategory": "Sales, Service",
		  "name": "Matt's Custom Golf Carts",
		  "address": "12894 Metro Pkwy, Fort Myers, FL 33966",
		  "addressurl": "https://www.google.com/maps/place/Matt's+Custom+Golf+Carts+239-333-8895/@26.5553631,-81.8558334,17z/data=!3m1!4b1!4m5!3m4!1s0x88db157dd93d4fbb:0xff1f82341b38f4e0!8m2!3d26.5553583!4d-81.8536447",
		  "phone": "239-333-8895",
		  "email": "",
		  "website": "",
		  "image": "15KigiC5cadPU0l7jF79cOc5cQ2gZhpds",
		  "comment": "Sales, service, and accessories for golf carts. Reasonable pricing and excellent service."
		},
		{
		  "category": "Golf Carts",
		  "subcategory": "ad_listing",
		  "name": "Amazon Ad",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "https://www.amazon.com/s/ref=as_li_ss_tl?k=golf+cart+accessories&rh=n:10971181011,n:3410871&dc&crid=3UGLIFF2VM7G&qid=1585602925&rnid=2941120011&sprefix=golf+c,aps,189&ref=sr_nr_n_13&linkCode=ll2&tag=apontares-20&linkId=e2e8228b875b2912b666a04d2f5802b8&language=en_US",
		  "image": "1DtzlkGh7-cLywvpuDSoDo1yB605nhczg",
		  "comment": "Shop Amazon for a huge assortment of golf cart accessories from top brands at competitive prices."
		},
		{
		  "category": "Grocery",
		  "subcategory": "Supermarket",
		  "name": "Publix",
		  "address": "11851 Palm Beach Blvd, Fort Myers, FL 33905",
		  "addressurl": "https://www.google.com/maps/place/Publix+Super+Market+at+The+Shops+at+Verandah/@26.7002201,-81.7660166,15z/data=!4m5!3m4!1s0x88db6f20e46083eb:0x661c75946b70f9f5!8m2!3d26.6988791!4d-81.7612597?hl=en",
		  "phone": "239-690-9565",
		  "email": "",
		  "website": "https://www.publix.com/",
		  "image": "1Cu_YkqypMEQaOWYUNyS0ujSmJwu8ABrv",
		  "comment": "Supermarket chain with a wide selection of groceries, plus deli & bakery departments."
		},
		{
		  "category": "Grocery",
		  "subcategory": "Supermarket",
		  "name": "Winn-Dixie",
		  "address": "5696 Bayshore Rd, Fort Myers, FL 33917",
		  "addressurl": "https://www.google.com/maps/place/Winn+Dixie/@26.6879326,-81.8658746,17z/data=!3m1!4b1!4m5!3m4!1s0x88db69d92701f34b:0x7532968a1cb398b1!8m2!3d26.6879326!4d-81.8636859?hl=en",
		  "phone": "239-731-1007",
		  "email": "",
		  "website": "https://www.winndixie.com/StoreDetails?search=2481&zipcode=33917&distance=3.282422043297156",
		  "image": "1lL0AeILRnS6czHdrG6e3LOsKfWEXoJZK",
		  "comment": "Founded in 1925, Winn-Dixie grocery stores serve communities throughout five southeastern states including Florida."
		},
		{
		  "category": "Grocery",
		  "subcategory": "ad_full_width",
		  "name": "Amazon Ad",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "https://www.amazon.com/b/ref=as_li_ss_tl?node=16310101&linkCode=ll2&tag=apontares-20&linkId=2e628f7a53b71b0059382badc3c45663&language=en_US",
		  "image": "1yI7BK0tzggb3QIQWvIfdyNwwrvQXLHLO",
		  "comment": ""
		},
		{
		  "category": "Health and Wellness",
		  "subcategory": "Massage, Skin Care, Aromatherapy",
		  "name": "Anahata Health and Wellness",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "yourwellnessexpert@hotmail.com",
		  "website": "",
		  "image": "1J4V2KwwtIuCSFQwmqZFWDRzVc7gpU-22",
		  "comment": "Providing massage, skin care, Reiki, yoni steaming, aromatherapy, TPR services, prenatal massage, and medical massage. Contact Danielle Hagmann for details."
		},
		{
		  "category": "Health and Wellness",
		  "subcategory": "",
		  "name": "Babcock Ranch Healthy Chocolate",
		  "address": "Babcock Ranch, FL",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "941-676-7300",
		  "email": "",
		  "website": "http://babcockranchchocolate.com/",
		  "image": "1ggiabvkyHrCv5jY0K3I5vV5jTrasnsbs",
		  "comment": "Lynette Henk is a Babcock Ranch resident and sells healthy chocolate and wellness products through her Beyond healthy chocolate business."
		},
		{
		  "category": "Health and Wellness",
		  "subcategory": "Therapeutic and Maternity Massage, Reflexology, Aromatouch",
		  "name": "Restore Massage Therapy",
		  "address": "41 Del Prado Blvd N Suite 4, Cape Coral, FL 33909",
		  "addressurl": "https://www.google.com/maps/place/Restore+Massage+Therapy/@26.6624211,-81.9428672,17z/data=!3m1!4b1!4m5!3m4!1s0x88db3f54140102dd:0x4542d58829d6178b!8m2!3d26.6624163!4d-81.9406732?hl=en",
		  "phone": "239-265-4727",
		  "email": "",
		  "website": "https://www.restoremassagetherapyfl.com/",
		  "image": "1ZTGXLTgIbu5OZgugpozMPzGsA1GruXw8",
		  "comment": "The focus of Restore Massage Therapy is on proactive health and wellness specifically for women and moms."
		},
		{
		  "category": "Health and Wellness",
		  "subcategory": "Aromatherapy, Yoga",
		  "name": "Simply Wen Wellness",
		  "address": "Babcock Ranch, FL 33982",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "309-966-3168",
		  "email": "wen@simplywen.com",
		  "website": "https://www.simplywen.com/",
		  "image": "1oggmrb9edJ8KfR_wjilgS3Nf-Wm8mxl8",
		  "comment": "Wen Leu is a Babcock Ranch resident, Certified Essential Oil Coach and a 200-hr Certified Yoga Instructor."
		},
		{
		  "category": "Home Decor",
		  "subcategory": "Blinds, Shades, Shutters",
		  "name": "At Home Blinds and Decor",
		  "address": "15881 S Tamiami Trail, Fort Myers, FL 33908",
		  "addressurl": "https://www.google.com/maps/place/At+Home+Blinds+%26+Decor,+Inc/@26.5122192,-81.8670851,15.25z/data=!4m5!3m4!1s0x88db1ca00c6f2d87:0x8c2e59b6cf01096c!8m2!3d26.511637!4d-81.861649?hl=en",
		  "phone": "239-415-7312",
		  "email": "sales1@athomeblinds.com",
		  "website": "https://athomeblinds.com/",
		  "image": "1XUPX9ghdTdb1Ooc8Q49Tvmi6j3xl-vid",
		  "comment": "They have a showroom. Everyone from the owner, sales manager, design consultant, and installation tech were fantastic."
		},
		{
		  "category": "Home Decor",
		  "subcategory": "Tile, Flooring",
		  "name": "Davis Flooring",
		  "address": "Babcock Ranch, FL 33982",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "570-204-3421",
		  "email": "",
		  "website": "",
		  "image": "1V-D-iH3CPrgF4cnClNKdB962gCwNDJVA",
		  "comment": "Babcock Ranch resident Jeff Davis is the owner of Davis Flooring. He has over 30 years of experience in tile, laminate, carpet, hardwood, vinyl plank, custom showers and back splash."
		},
		{
		  "category": "Home Decor",
		  "subcategory": "Mirror Frames",
		  "name": "Frame Ur Mirror LLC",
		  "address": "Babcock Ranch, FL 33982",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "239-841-3389",
		  "email": "framingandco@gmail.com",
		  "website": "https://www.facebook.com/Frame-Ur-Mirror-LLC-112474840582411",
		  "image": "1efqKZDTMP2hhVIH0k4XHcLyqhUGV__mx",
		  "comment": "Ashlee Marie Jenkins is a Babcock Ranch resident and owner of Frame Ur Mirror LLC. Creating and installing custom frames for existing mirrors."
		},
		{
		  "category": "Home Decor",
		  "subcategory": "Furniture",
		  "name": "Havertys",
		  "address": "11798 S Cleveland Ave, Fort Myers, FL 33907",
		  "addressurl": "https://www.google.com/maps/place/Havertys+Furniture/@26.5697599,-81.8767229,16z/data=!4m5!3m4!1s0x88db4006be3754a7:0x942d2c56fce8163b!8m2!3d26.5694379!4d-81.8730608?hl=en",
		  "phone": "239-936-2229",
		  "email": "",
		  "website": "https://www.havertys.com/furniture/allstores/florida/fort-myers/fort-myers",
		  "image": "1je5mnE7hP9wTMeVHkvslEWz0m2upQjKW",
		  "comment": "Shopping for high-quality furniture in Fort Myers? Our Havertys Fort Myers Showroom has everything you’re searching for."
		},
		{
		  "category": "Home Decor",
		  "subcategory": "ad_listing",
		  "name": "Amazon Ad",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "https://www.amazon.com/b/ref=as_li_ss_tl?node=1063278&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-4&pf_rd_r=X9BXMNTY95N5S156C2M5&pf_rd_t=101&pf_rd_p=9a3ced60-b1ce-4756-ba9d-fdfa6b53b307&pf_rd_i=1055398&linkCode=ll2&tag=apontares-20&linkId=814c014384cd5a00b8da8aab1f1f1499&language=en_US",
		  "image": "1sz_ez6_kKWFh_V69sM96Jretp5BvvjPn",
		  "comment": "Shop Amazon for the latest trending items and featured brands in Home Decor."
		},
		{
		  "category": "Home Inspection",
		  "subcategory": "Home Inspection, New Construction",
		  "name": "Florida Building Inspection Group",
		  "address": "1435 Oakfield Dr Brandon FL, 33511",
		  "addressurl": "https://www.google.com/maps/place/Florida+Building+Inspection+Group/@27.9340005,-82.3081072,17z/data=!3m1!4b1!4m5!3m4!1s0x88c2d11ec0f21635:0x80a6e5a551a4f392!8m2!3d27.9340005!4d-82.3059185",
		  "phone": "239-310-0533",
		  "email": "",
		  "website": "https://www.flbigroup.com/",
		  "image": "1epMKgS6rg9-1GjQ0q-opy9FgR-7Ozp-b",
		  "comment": "Currently serving all of Lee and Collier counties. The Florida Building Inspection Group is bringing our expert quality inspections to South West Florida!"
		},
		{
		  "category": "Home Inspection",
		  "subcategory": "Home Inspection",
		  "name": "Palm Coast Inspection",
		  "address": "",
		  "addressurl": "",
		  "phone": "239-745-5776",
		  "email": "",
		  "website": "",
		  "image": "1HPR7aoGrJH9nWta8GRoFP3S_S8ONmYan",
		  "comment": "When Babcock Ranch residents want a home inspection, no other name is recommended more often than Terry Carroll of Palm Coast Inspection. Highly trusted in Babcock Ranch for reliable and honest home inspections."
		},
		{
		  "category": "Home Services",
		  "subcategory": "Cleaning",
		  "name": "A to Klean Auto Detailing and Home Cleaning",
		  "address": "Babcock Ranch, FL 33982",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "941-979-0848",
		  "email": "atoklean@gmail.com",
		  "website": "https://www.facebook.com/atocleanautodetailing/",
		  "image": "10EMgd-vTr_UfNFYxz89jA1C7p7tuIYTx",
		  "comment": "Aleem Khan, a Babcock Ranch resident, details cars and cleans homes here in the ranch and currently has several customers with very positive reviews."
		},
		{
		  "category": "Home Services",
		  "subcategory": "Handyman",
		  "name": "Al Mastice",
		  "address": "17788 Wayside Bend, Punta Gorda, FL 33982",
		  "addressurl": "https://www.google.com/maps/place/17788+Wayside+Bnd,+Punta+Gorda,+FL+33982/@26.779374,-81.7424428,17z/data=!3m1!4b1!4m5!3m4!1s0x88db65a616a8bfd5:0x74ca6f03a0aeec3!8m2!3d26.7793692!4d-81.7402541?hl=en",
		  "phone": "201-286-1333",
		  "email": "almast1201@gmail.com",
		  "website": "",
		  "image": "1hV5o504x9LD_ryB3mFVXmyV1xVfMie4V",
		  "comment": "Al is a Babcock Ranch resident who does all types of handy man services and much more. Call Al for fair pricing and great service."
		},
		{
		  "category": "Home Services",
		  "subcategory": "Fencing, Sliding Doors, Screens",
		  "name": "DayDid Specialties",
		  "address": "3884 Progress Ave #102, Naples, FL 34104",
		  "addressurl": "https://www.google.com/maps/place/Daydid+Specialties/@26.1630673,-81.7820772,13.75z/data=!4m5!3m4!1s0x88db1eefffffffff:0x8f1ef9fca41b2476!8m2!3d26.1637594!4d-81.7612038?hl=en",
		  "phone": "866-942-0917",
		  "email": "service@daydid.com",
		  "website": "https://www.daydid.com/",
		  "image": "1cFmkrEwa2cuydexmFPKt60JvdzXhnsZM",
		  "comment": "Offering replacement, service, and installation of fencing, sliding glass doors, screens, and windows.<br />Also contact Lucas Manueles 239-330-5063"
		},
		{
		  "category": "Home Services",
		  "subcategory": "Enclosures, Screens, Lanai, Fencing, Hand Rails",
		  "name": "DreamWork Aluminum",
		  "address": "5615 8th St W, Lehigh Acres, FL 33971",
		  "addressurl": "https://www.google.com/maps/place/DreamWork+Aluminum,+Inc./@26.6199512,-81.7569666,17z/data=!3m1!4b1!4m5!3m4!1s0x88db7263bc5f74f1:0x2e3d9845013b5dc9!8m2!3d26.6199464!4d-81.7547726?hl=en",
		  "phone": "239-303-2719",
		  "email": "Sales1@dreamworkaluminum.com ",
		  "website": "https://dreamworkaluminum.com/",
		  "image": "1DVqiZF9FGlz4HzBTePVdqZvSKoT4zDXg",
		  "comment": "Kevin Bradford provides pool cage design and construction, pool safety fences, screen enclosure repair, sunrooms and lanais for DreamWork Aluminum.<br /> His cell is 719-205-8454"
		},
		{
		  "category": "Home Services",
		  "subcategory": "Gutters",
		  "name": "FLA Gutters (Shaun McKeeman)",
		  "address": "",
		  "addressurl": "",
		  "phone": "239-994-0394",
		  "email": "",
		  "website": "",
		  "image": "1CczPEgPCz1Yghm1trJeOT2ljieqMygcb",
		  "comment": "Their website doesn't seem to be active, but be sure to call Shaun McKeeman for a great price and great work."
		},
		{
		  "category": "Home Services",
		  "subcategory": "Various, Tutoring, Baby Sitting, Dog Walking",
		  "name": "Katie Rose Summer Services",
		  "address": "Babcock Ranch, FL 33982",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "727-505-5948",
		  "email": "kmayers101391@gmail.com",
		  "website": "",
		  "image": "",
		  "comment": "Katie Rose is a Babcock Ranch resident offering a variety of  summer services such as reading tutoring, baby sitting, dog walking, grocery shopping, package retrieval, and plant sitting."
		},
		{
		  "category": "Home Services",
		  "subcategory": "Handyman",
		  "name": "Lindseys Handyman and Maintenance",
		  "address": "",
		  "addressurl": "",
		  "phone": "239-600-0302",
		  "email": "",
		  "website": "",
		  "image": "1jpcas_2QoOABgGY78BxC9KcBe6dJQrFT",
		  "comment": "Licensed and Insured. Small to large jobs, does it all. Fair pricing and reliable."
		},
		{
		  "category": "Home Services",
		  "subcategory": "Air Duct Cleaning, Dryer Vent Cleaning",
		  "name": "Lint Out",
		  "address": "12331 Towne Lake Drive, Unit 6, Fort Myers, FL 33913",
		  "addressurl": "https://www.google.com/maps/place/Lint+Out+Dryer+Vent+%26+Air+Duct+Cleaning/@26.5644038,-81.7536717,17z/data=!3m1!4b1!4m5!3m4!1s0x88db6bbeece24691:0xbd5282ff3b5a92bd!8m2!3d26.564399!4d-81.751483?hl=en",
		  "phone": "239-332-5468",
		  "email": "info@lintoutinc.com",
		  "website": "https://www.lintoutinc.com/",
		  "image": "1XP4fIgmhWprCW-3Z3FHqqDQkfVLvjvB3",
		  "comment": "Dryer vents, bathroom vents, or A/C ducts, you can rely on Lint Out to get the job done right.<br />\nGet a group rate with significant savings by asking neighbors to schedule on the same day. Call Lint Out to set this up.<br />\nOther contact info: Kim Johns | 239-332-5459 | kim@lintoutinc.com"
		},
		{
		  "category": "Home Services",
		  "subcategory": "Glass Shower Doors",
		  "name": "My Shower Door",
		  "address": "14261 S Tamiami Trail #2, Fort Myers, FL 33912",
		  "addressurl": "https://www.google.com/maps/place/MY+Shower+Door/@26.534955,-81.869989,15z/data=!4m5!3m4!1s0x0:0xe85f2e368683087d!8m2!3d26.5349551!4d-81.8699887?hl=en-US",
		  "phone": "239-337-3667",
		  "email": "kristen@myshowerdoor.com",
		  "website": "https://myshowerdoor.com/",
		  "image": "1Irc5iIugEP_MJdTJKCNvdQ3AOeQcvrZt",
		  "comment": "MY Shower Door is the only provider of Frameless Shower Enclosures that manufactures, designs, installs and warranties its own products. We'll come out to your home as well. Contact Kristen Valdes for more info."
		},
		{
		  "category": "Home Services",
		  "subcategory": "Gutters, Insulation",
		  "name": "Rice Insulation and Glass",
		  "address": "14970 Technology Ct, Fort Myers, FL 33912",
		  "addressurl": "https://www.google.com/maps/place/Rice+Insulation+%26+Glass/@26.5264357,-81.8648454,15z/data=!4m5!3m4!1s0x88db1564305310dd:0x7e37037590346cd1!8m2!3d26.5257367!4d-81.8571401?hl=en",
		  "phone": "239-444-1389",
		  "email": "evan.jones@truteam.com",
		  "website": "https://www.truteam.com/branches/fl/lee/rice-insulation-glass-ft-myers/",
		  "image": "1zT8TGM4AOxdwEQ2YAhm0GcOVSWeHeDnn",
		  "comment": "Installation of gutters, insulation and more. We are a TruTeam company, so we have a national footprint along with a focus on our local community."
		},
		{
		  "category": "Home Services",
		  "subcategory": "Blade Sharpening",
		  "name": "Sofa-King Sharp",
		  "address": "17532 Canopy Ct, Babcock Ranch, Florida 33982",
		  "addressurl": "https://www.google.com/maps/search/17532+Canopy+Ct,+Babcock+Ranch,+Florida+33982/@26.7757894,-81.7422953,16.5z?hl=en",
		  "phone": "239-321-9468",
		  "email": "sharpswfl@gmail.com",
		  "website": "https://sofa-kingsharp.com/",
		  "image": "1WmJiHugahMuc8V8_76fVAtHeAuIKQ-Kd",
		  "comment": "Babock Ranch residents Leah and Jeff Campbell sharpen, repair and restore fine salon shears, scissors and knives in SWFL."
		},
		{
		  "category": "Home Services",
		  "subcategory": "Cleaning, Remodeling, Painting",
		  "name": "TMCJ Services LLC",
		  "address": "",
		  "addressurl": "",
		  "phone": "239-287-5592",
		  "email": "Tmcjservices@yahoo.com ",
		  "website": "https://tmcjservicesandmore.com/",
		  "image": "1nq1K7mctDEZdKRT53S7uncTh-ibsqkZB",
		  "comment": "Tristan Michaela Getts, a Babcock Ranch resident, operates TMCJ Services, a licensed and insured cleaning company specializing in residential and construction cleaning, tile, wood floors, remodeling, demolition, painting, and other cleaning services."
		},
		{
		  "category": "Home Services",
		  "subcategory": "ad_full_width",
		  "name": "Amazon Ad",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "https://www.amazon.com/s/ref=as_li_ss_tl?url=search-alias=local-services&field-keywords=&linkCode=ll2&tag=apontares-20&linkId=e849bd93b8a0a02f7d81c512f4e7a33d&language=en_US",
		  "image": "1dAiCqcz2QwqAXp7LrKkpeekMJG-KOPSs",
		  "comment": ""
		},
		{
		  "category": "Home Watch",
		  "subcategory": "Home Watch",
		  "name": "Home Watch Services by A to Klean",
		  "address": "Babcock Ranch, FL 33982",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "941-467-5019",
		  "email": "atoklean@gmail.com",
		  "website": "https://www.facebook.com/BabcockHomeWatch/",
		  "image": "",
		  "comment": "Owned and operated by Babcock Ranch resident, Aleem Khan of A to Klean, LLC, Home Watch Services by A to Klean provides home watch services to our local community."
		},
		{
		  "category": "Home Watch",
		  "subcategory": "Home Watch",
		  "name": "Keylime Home Watch",
		  "address": "Babcock Ranch, FL 33982",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "404-723-8309",
		  "email": "simone@keylimehomewatch.com",
		  "website": "https://keylimehomewatch.com/",
		  "image": "1wZUjQjV79GaEtc4AHbVBXHb7mBqge47z",
		  "comment": "Babcock Ranch resident Simone Simonton is the owner of Keylime Home Watch. Insured and bonded, Simone provides home watch services to Babcock Ranch residents."
		},
		{
		  "category": "Home Watch",
		  "subcategory": "Home Watch",
		  "name": "Little Bird Home Watch",
		  "address": "Babcock Ranch, FL 33982",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "954-598-3573",
		  "email": "littlebirdhomewatch@gmail.com",
		  "website": "",
		  "image": "1liSt02WGPLXDN800_NpqF65VURbhDZx3",
		  "comment": "Brittany Androchuk is as Babcock Ranch resident and CEO of Little Bird Home Watch. She'll keep an eye on your home, do grocery shopping, cleaning and more. Affordable pricing."
		},
		{
		  "category": "Informational",
		  "subcategory": "informational",
		  "name": "Lennar Smart Home How-To by George Buscher",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "https://docs.google.com/document/d/1Z0zXhu9FYs3VEq3iawQa2sOPJ-vd1a8YEfeMBPpiEn8/edit",
		  "image": "1er9getWADTB1i3_8cEWEn6aAm-FeBL7h",
		  "comment": "<strong>Lennar Smart Home How-To Guide</strong><br /> This how-to guide was written by Babcock Ranch resident George Buscher and covers the setup of various tech gadgets that come standard with a Lennar home."
		},
		{
		  "category": "Informational",
		  "subcategory": "informational",
		  "name": "Mark Wilkerson",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "https://www.mwwpv.com/livingthebetterlifeinbabcockranch",
		  "image": "1uGz0jEGMG0J7bWeZADo0v_uh7iaMvjRg",
		  "comment": "<strong>Living The Better Life in Babcock Ranch Blog</strong><br />Organized  by Mark Wilkerson, find valuable information from fellow neighbors in one convenient location."
		},
		{
		  "category": "Informational",
		  "subcategory": "youtube",
		  "name": "Irrigation Hunter X-Core",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "_PRtho7XiSA",
		  "image": "",
		  "comment": "<strong>Hunter X-Core Irrigation Programming Overview Part 1</strong>"
		},
		{
		  "category": "Informational",
		  "subcategory": "youtube",
		  "name": "Irrigation Hunter X-Core",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "9hpf1GUbt2o",
		  "image": "",
		  "comment": "<strong>Hunter X-Core Irrigation Programming Part 2</strong>"
		},
		{
		  "category": "Informational",
		  "subcategory": "youtube",
		  "name": "Rinnai Tankless Water Heater DIY Flush Maintenance",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "znuACzzav_Y",
		  "image": "",
		  "comment": "<strong>Rinnai Tankless Water Heater DIY Flush Maintenance</strong>"
		},
		{
		  "category": "Informational",
		  "subcategory": "youtube",
		  "name": "Ruckus WIFI AP Setup",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "j8I5aVwMNMg",
		  "image": "",
		  "comment": "<strong>Ruckus WiFi Access Point Setup in 5 Minutes</strong>"
		},
		{
		  "category": "Informational",
		  "subcategory": "youtube",
		  "name": "Solar City Series: NBC",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "CUIzVPH9G6M",
		  "image": "",
		  "comment": "<strong>Solar City: Dawn of Solar in the Sunshine State (Part 1) | NBC Nightly News</strong>"
		},
		{
		  "category": "Informational",
		  "subcategory": "youtube",
		  "name": "Solar City Series: NBC",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "27OgP3XGMbs",
		  "image": "",
		  "comment": "<strong>Solar City: The Future of Florida’s Energy (Part 2) | NBC Nightly News</strong>"
		},
		{
		  "category": "Informational",
		  "subcategory": "youtube",
		  "name": "Solar City Series: NBC",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "IE5Px8q4GdU",
		  "image": "",
		  "comment": "<strong>Solar City: Building a Town Around a School (Part 3) | NBC Nightly News</strong>"
		},
		{
		  "category": "Informational",
		  "subcategory": "youtube",
		  "name": "Solar City Series: NBC",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "thJB9HeS2JA",
		  "image": "",
		  "comment": "<strong>Solar City: Building Around Nature (Part 4) | NBC Nightly News</strong>"
		},
		{
		  "category": "Insurance",
		  "subcategory": "Home, Vehicle, Commercial",
		  "name": "Babcock Ranch Insurance Co.",
		  "address": "42880 Crescent Loop, Ste 120, Babcock Ranch, FL 33982",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch+Insurance+Co./@26.7836793,-81.7485418,17z/data=!3m1!4b1!4m5!3m4!1s0x88db655eb1ba28c1:0xeb9aaf35220d470e!8m2!3d26.7836745!4d-81.7463478?hl=en",
		  "phone": "941-212-0041",
		  "email": "tammy.hindman@babcockranchinsuranceco.com",
		  "website": "https://babcockranchinsuranceco.com/",
		  "image": "1bgCkgoToo7sIg58v-3KJO-sXwtKOhUCk",
		  "comment": "Babcock Ranch Insurance was built for the unique needs of the Babcock Ranch community by providing home, auto, and comprehensive commercial insurance programs for businesses. Contact Tammy Hindman."
		},
		{
		  "category": "Insurance",
		  "subcategory": "Home, Vehicle, Umbrella, Flood",
		  "name": "Brightway Insurance",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "https://www.brightway.com/",
		  "image": "1ct2mApLhvOv1cTqadX8XqW5jzaxO1EL3",
		  "comment": "Babcock Ranch neighbors have recommended several agents from various offices.<br />Below are some:<br />Ella Miller 239-848-6966<br />Sherry Ausdran 239-731-2007<br />Chris Mitchell chris.mitchell@brightway.com"
		},
		{
		  "category": "Insurance",
		  "subcategory": "Home, Vehicle, Umbrella, Flood",
		  "name": "Culbertson Agency Inc",
		  "address": "13099 S Cleveland Ave. #310, Fort Myers, FL 33907",
		  "addressurl": "https://www.google.com/maps/place/Culbertson+Agency/@26.5510082,-81.8731628,17z/data=!3m1!4b1!4m5!3m4!1s0x88db3fc3cd672853:0x86b7c4715c205bd!8m2!3d26.5510034!4d-81.8709688?hl=en",
		  "phone": "239-210-7700",
		  "email": "",
		  "website": "https://www.culbertsonagency.com/",
		  "image": "1BktxD6zICna3BcrxsWP1Ecwvu8WhGgNG",
		  "comment": "We're able to save money for over 90% of our new customers. For a custom quote, give us a call anytime."
		},
		{
		  "category": "Insurance",
		  "subcategory": "Allstate, Home, Vehicle, Umbrella, Flood",
		  "name": "East and Greenwell",
		  "address": "20321 Grande Oak Shoppes Blvd, Suite 308, Estero, FL 33928",
		  "addressurl": "https://www.google.com/maps/place/East+%26+Greenwell+Insurance+Inc:+Allstate+Insurance/@26.438454,-81.768709,15z/data=!4m5!3m4!1s0x0:0xd4add251aa0da502!8m2!3d26.4384536!4d-81.7687093?hl=en-US",
		  "phone": "239-434-7877",
		  "email": "eandg@allstate.com",
		  "website": "https://eastandgreenwell.com/",
		  "image": "1pBdmlulDws576UCo17AvvoWxfNhiDAtm",
		  "comment": "An Allstate agent providing home (through Tower Hill, St. John's and others), vehicle, umbrella, flood coverage and more. Various locations throughout SWFL."
		},
		{
		  "category": "Insurance",
		  "subcategory": "Home, Vehicle",
		  "name": "Insurance Source of Naples",
		  "address": "2355 Vanderbilt Beach Road, Ste #152, Naples, FL 34109",
		  "addressurl": "https://www.google.com/maps/place/Insurance+Source+of+Naples/@26.2460495,-81.7743053,17z/data=!3m1!4b1!4m5!3m4!1s0x88db1c243737c889:0x5b7a6d595a45a574!8m2!3d26.2460447!4d-81.7721113?hl=en",
		  "phone": "239-325-3030",
		  "email": "info@ison1.com",
		  "website": "https://www.ison1.com/",
		  "image": "1z7N_tlBy1Z41LKY3fwjTnmbfnPw1j13T",
		  "comment": "Our mission is to provide comprehensive, competitively priced insurance products through well respected and financially sound carriers."
		},
		{
		  "category": "Insurance",
		  "subcategory": "Home, Vehicle, Flood",
		  "name": "The Insurancenter",
		  "address": "16591 South Tamiami Trail Fort Myers, FL 33908",
		  "addressurl": "https://www.google.com/maps/place/The+Insurancenter/@26.5017794,-81.860649,15.5z/data=!4m5!3m4!1s0x88db3fd69ec0ba69:0x19260b0cae7a9a4d!8m2!3d26.5014273!4d-81.8547097?hl=en",
		  "phone": "239-489-2838",
		  "email": "insurance@insurance-center.net",
		  "website": "http://www.insurance-center.net/",
		  "image": "10w1KVrTUrs7CagP3QNvMAg2wgnGfS5qs",
		  "comment": "The Insurancenter of Fort Myers, FL is committed to providing clients with the highest quality insurance plans at the lowest possible prices.<br />Speak with Angela Meloy angi@insurance-center.net"
		},
		{
		  "category": "Insurance",
		  "subcategory": "Home, Flood",
		  "name": "Tower Hill Insurance",
		  "address": "",
		  "addressurl": "",
		  "phone": "800-342-3407",
		  "email": "",
		  "website": "https://www.thig.com/",
		  "image": "1J_a91mvcn7w36Yiin-qUz81tKNGfWGu6",
		  "comment": "Today we are one of Florida’s largest residential property insurers, represented by more than 850 insurance agencies throughout the state."
		},
		{
		  "category": "Lawn and Garden",
		  "subcategory": "Landscape",
		  "name": "Bradford Landscape Solutions",
		  "address": "",
		  "addressurl": "",
		  "phone": "239-287-2664",
		  "email": "",
		  "website": "",
		  "image": "12PMe-mUJga1D5uh85OH8Qyu-F4RzaZrL",
		  "comment": "Babcock Ranch resident Daniel Geist of Bradford Landscape Solutions provides landscape installation, lighting, and irrigation services."
		},
		{
		  "category": "Lawn and Garden",
		  "subcategory": "Landscape",
		  "name": "Scott's Landscape Nursery",
		  "address": "5870 Bayshore Rd, North Fort Myers, FL 33917",
		  "addressurl": "https://www.google.com/maps/place/Scott's+Landscape+Nursery/@26.6897436,-81.8663119,15.25z/data=!4m5!3m4!1s0x88db69da2aeb7a7b:0x2fb3045971d7d561!8m2!3d26.6901594!4d-81.8607247?hl=en",
		  "phone": "239-599-4071",
		  "email": "joe@scottslandscapenursery.com",
		  "website": "https://scottslandscapenursery.com/",
		  "image": "1UCE7ZLVukavEpORihb3BVzswOYpOZ4tS",
		  "comment": "Certified as landscape contractors, we are able to beautify neighborhoods while enhancing efforts to maintain the balance of nature."
		},
		{
		  "category": "Legal Services",
		  "subcategory": "Law, Wills",
		  "name": "LegalShield at Babcock Ranch",
		  "address": "Babcock Ranch, FL 33982",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "404-496-8097",
		  "email": "nancy@csuiteadvisors.com",
		  "website": "https://csuiteadvisorsllc.wearelegalshield.com/",
		  "image": "14apE2txodLDeEWMSAn_kD78aP23Ll-Ms",
		  "comment": "LegalShield at Babcock Ranch is an innovative way to get 90% of your legal matters handled at an incredibly low price of just $24.95/mo for an entire family. That includes FREE WILLS for you and your spouse/partner! Includes unlimited phone consults with the LegalShield law firm in Plantation, and so much more! Talk to Babcock Ranch resident Nancy Chorpenning today.<br /> Also on Facebook at <br />facebook.com/BabcockLegalShield"
		},
		{
		  "category": "Medical",
		  "subcategory": "Eye exams, Contacts, Eyeglasses",
		  "name": "America's Best",
		  "address": "3260 Forum Blvd, Fort Myers, FL 33905",
		  "addressurl": "https://www.google.com/maps/place/America's+Best+Contacts+%26+Eyeglasses/@26.6167759,-81.8006087,16.5z/data=!3m1!5s0x88db6b98ea40eb59:0xe8c76fea04f419c0!4m5!3m4!1s0x88db6b99d1cb7745:0x27488cde40a6f2ae!8m2!3d26.6161701!4d-81.7992868?hl=en",
		  "phone": "239-738-7174",
		  "email": "",
		  "website": "https://www.americasbest.com/store-list/ft-myers-fl-33905/",
		  "image": "1QG4HT4qAYLpSsa6yBKG2r-OlzpPpleWY",
		  "comment": "Welcome to the Fort Myers America's Best Contacts & Eyeglasses store! We proudly serve the Fort Myers, Cape Coral, Lehigh Acres, Estero, and Bonita Springs communities."
		},
		{
		  "category": "Medical",
		  "subcategory": "Primary, Walk-In",
		  "name": "Reliant Acute Care",
		  "address": "5781 Lee Blvd, Lehigh Acres, FL 33971",
		  "addressurl": "https://www.google.com/maps/place/Reliant+Acute+Care/@26.6199687,-81.7697797,15z/data=!4m5!3m4!1s0x88db7276611df229:0x4314d3c413c2f987!8m2!3d26.6183885!4d-81.7652008?hl=en",
		  "phone": "239-265-9760",
		  "email": "",
		  "website": "http://www.reliantacutecare.com/",
		  "image": "18DWsr45vYmHHORmDCkF6l_l6I8KNniuv",
		  "comment": "Walk-In and Primary Care medical clinic certified as an Immediate Care Clinic. Family Nurse Practitioner Jennifer Haas welcomes new patients and is very knowledgeable with excellent bedside manner."
		},
		{
		  "category": "Painter",
		  "subcategory": "Interior, Exterior",
		  "name": "Cano Painting",
		  "address": "",
		  "addressurl": "",
		  "phone": "239-464-2919",
		  "email": "carlos@canopainting.com",
		  "website": "https://canopainting.com/",
		  "image": "1bGfhTAteQT3FtyJD1xYLqbkUtrd2Vt7Y",
		  "comment": "Family owned and operated, Cano Painting is a premier painting contractor serving Lee and Collier County with over 15 years of painting experience."
		},
		{
		  "category": "Painter",
		  "subcategory": "Interior, Murals, Fine Art",
		  "name": "Jose Sanchez Art Inc.",
		  "address": "",
		  "addressurl": "",
		  "phone": "239-896-0968",
		  "email": "Josepainter@live.com",
		  "website": "http://josesanchezartinc.com/",
		  "image": "1K3auPEPjCNcdfp3M3gB00N1sYmlYQP_3",
		  "comment": "With over ten years of experience in residential painting, Jose Sanchez Art, Inc. focuses on providing the highest level of detail and old world craftsmanship. Venetian Plaster, Murals, Aging Techniques, Wood - Metallic - Textile finishes, Interior Base Painting."
		},
		{
		  "category": "Painter",
		  "subcategory": "Cleaning, Remodeling, Painting",
		  "name": "TMCJ Services LLC",
		  "address": "",
		  "addressurl": "",
		  "phone": "239-287-5592",
		  "email": "Tmcjservices@yahoo.com ",
		  "website": "https://tmcjservicesandmore.com/",
		  "image": "1nq1K7mctDEZdKRT53S7uncTh-ibsqkZB",
		  "comment": "Tristan Michaela Getts, a Babcock Ranch resident, operates TMCJ Services, a licensed and insured cleaning company specializing in residential and construction cleaning, tile, wood floors, remodeling, demolition, painting, and other cleaning services."
		},
		{
		  "category": "Pest Control",
		  "subcategory": "Pest Control",
		  "name": "HomeTeam Pest Defense",
		  "address": "5570 Lee Street, Ste 12, Lehigh Acres, FL 33971",
		  "addressurl": "https://www.google.com/maps/place/HomeTeam+Pest+Defense/@26.6175844,-81.7523394,17z/data=!3m1!4b1!4m5!3m4!1s0x88db14a31386d70d:0x7feedcec88161c3b!8m2!3d26.6175796!4d-81.7501454?hl=en",
		  "phone": "239-561-1300",
		  "email": "katherine.suarez@pestdefense.com",
		  "website": "https://pestdefense.com/ft-myers/",
		  "image": "1gxdOD9yMrVCw7ptF8fVzZj6i2CFlirUC",
		  "comment": "HomeTeam Pest Defense services Babcock Ranch and has a pest control technician in Babcock Ranch everyday. Contact Katherine Suarez for details."
		},
		{
		  "category": "Pest Control",
		  "subcategory": "Pest Control",
		  "name": "Perfection Lawn and Pest Control",
		  "address": "11985 Amedicus Lane, Ft. Myers, FL 33907",
		  "addressurl": "https://www.google.com/maps/place/Perfection+Lawn+%26+Pest+Control+Inc/@26.5696728,-81.8639191,15z/data=!4m13!1m7!3m6!1s0x88db6aac4d142cf3:0x2de95070b64e075e!2s11985+Amedicus+Ln,+Fort+Myers,+FL+33907!3b1!8m2!3d26.5676788!4d-81.8580576!3m4!1s0x88db6a98d0aaa979:0xeaf03074765bdc0a!8m2!3d26.5676788!4d-81.8580576?hl=en",
		  "phone": "239-482-3723",
		  "email": "perfectionpest@aol.com",
		  "website": "https://www.perfectionlawnandpestcontrol.com",
		  "image": "1rHIP46pn2_SqC_NtiStbiiJVDbeMTBx2",
		  "comment": "Travis is a Babcock Ranch resident and works at Perfection. Ask for Travis to pest-proof your home and lawn."
		},
		{
		  "category": "Pest Control",
		  "subcategory": "Pest Control",
		  "name": "Pest Away, Inc.",
		  "address": "",
		  "addressurl": "",
		  "phone": "239-458-0700",
		  "email": "pestawayinc@comcast.net",
		  "website": "",
		  "image": "1sY08mE3eRppyz21X6AvCflMuBvQJE-JS",
		  "comment": "Affordable, honest and effective pest control.<br />Michael A. Verriello, President. Cell: 239-645-2633"
		},
		{
		  "category": "Pet",
		  "subcategory": "Dog Walking, Pet Sitting, Cat Care, Pet Taxi",
		  "name": "Babcock Barks",
		  "address": "Babcock Ranch, FL 33982",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "239-945-9663",
		  "email": "info@babcockbarks.com",
		  "website": "https://www.babcockbarks.com",
		  "image": "1eZOuJJhegHNOP-azLocJZWm_MqTTYiEx",
		  "comment": "Kelli Shuttleworth, a Babcock Ranch resident and owner of Babcock Barks, provides professional dog walking, pet sitting, cat care, and much more."
		},
		{
		  "category": "Pet",
		  "subcategory": "Veterinarian",
		  "name": "Bayshore Animal Hospital",
		  "address": "6351 Bayshore Rd, Ste 50, North Fort Myers FL 33917",
		  "addressurl": "https://www.google.com/maps/place/Bayshore+Animal+Hospital/@26.6979,-81.8561113,17z/data=!3m1!4b1!4m5!3m4!1s0x88db69ce43d92ad5:0xdda2538a1d75fd6c!8m2!3d26.6978952!4d-81.8539173?hl=en",
		  "phone": "239-997-9663",
		  "email": "bayshoreanimalhospital@gmail.com",
		  "website": "https://bayshore-animal-hospital.com/",
		  "image": "1ZEdY17lbldfHxl1rziBu_xbS-_cxWbTL",
		  "comment": "Babcock Ranch resident, Dr. Lisa Neuman, is the founder of Bayshore Animal Hospital, which provides medical, surgical and dental services to keep your pet safe and healthy."
		},
		{
		  "category": "Pet",
		  "subcategory": "Veterinarian",
		  "name": "Colonial Animal Hospital",
		  "address": "9321 6 Mile Cypress Pkwy Ste 150, Fort Myers, FL 33966",
		  "addressurl": "https://www.google.com/maps/place/Colonial+Animal+Hospital/@26.6084252,-81.8119601,17z/data=!3m1!4b1!4m5!3m4!1s0x88db6ba7499752a1:0x72035886b923c3c3!8m2!3d26.6084604!4d-81.8097776?hl=en",
		  "phone": "239-541-0726",
		  "email": "cah1info@gmail.com",
		  "website": "https://colonialblvdanimalhospital.com/",
		  "image": "1KAjXf35HJmzi_m-b7l9xsKoOx9doAfTO",
		  "comment": "Colonial Animal Hospital provides wellness care, emergency and urgent care, grooming, and more for cats, dogs, exotic and avian pets."
		},
		{
		  "category": "Pet",
		  "subcategory": "Grooming",
		  "name": "Hair Everywhere Grooming",
		  "address": "Naples, FL",
		  "addressurl": "https://www.google.com/maps/place/Naples,+FL/@26.1450441,-81.8647523,12z/data=!3m1!4b1!4m5!3m4!1s0x88dae19b73c2d7ad:0x673f5318d72c9aaa!8m2!3d26.1420358!4d-81.7948103?hl=en",
		  "phone": "239-849-2499",
		  "email": "HairEverywhere.Grooming@gmail.com",
		  "website": "https://www.haireverywheregrooming.com",
		  "image": "1nBx_DRzHgoYlWVRnt2rv003YwdfELuEb",
		  "comment": "Professional Pet Stylist Jana comes to your home and specializes in small and medium dogs with a variety of grooming packages."
		},
		{
		  "category": "Pet",
		  "subcategory": "Grooming, Boarding",
		  "name": "The Royal Paw Grooming & Boarding",
		  "address": "Babcock Ranch, FL 33982",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "941-676-8979",
		  "email": "",
		  "website": "https://theroyalpawgrooming.com/",
		  "image": "1PvxSw2EaEbCxunGflhu72vT_GV8jtlFu",
		  "comment": "Located across 31 from Babcock Ranch, The Royal Paw Grooming & Boarding has been in business in Southwest Florida for over 50 years. They have an award winning groomer, state-of-the-art boarding facility,  and will be opening up daycare services in the New Publix Plaza in August."
		},
		{
		  "category": "Pet",
		  "subcategory": "Veterinarian",
		  "name": "Van Roekel & Associates",
		  "address": "18930 Old Bayshore Rd, N Ft Myers FL 33917",
		  "addressurl": "https://www.google.com/maps/place/Van+Roekel+%26+Associates/@26.7399102,-81.764425,17z/data=!3m1!4b1!4m5!3m4!1s0x88db6f92bb11648f:0x56511cda9ae37245!8m2!3d26.7400217!4d-81.7622301?hl=en",
		  "phone": "239-694-7177",
		  "email": "",
		  "website": "https://vanroekelassociates.com/",
		  "image": "1BAacgSXH_z8HR6ap7LrMDRnQ8jJKJDhO",
		  "comment": "Van Roekel & Associates, Inc is proud to serve Alva, FL and the surrounding areas. We provide the highest level of veterinary medicine along with friendly, compassionate service."
		},
		{
		  "category": "Photography",
		  "subcategory": "Photography",
		  "name": "Chris Tilley",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "ctilleyphotography@gmail.com",
		  "website": "",
		  "image": "1OIkDb-261dpavobgME1-72N8NVd_Oxlj",
		  "comment": "Chris offers professional photography services in Babcock Ranch. "
		},
		{
		  "category": "Photography",
		  "subcategory": "Real Estate Photography",
		  "name": "Perfect Real Estate Visuals",
		  "address": "",
		  "addressurl": "",
		  "phone": "954-546-8611",
		  "email": "perfectREvisuals@gmail.com",
		  "website": "https://www.perfectrealestatevisuals.com/",
		  "image": "1dWjw63TCTfQnE_r_kCDfCwO-IDJA3MO1",
		  "comment": "Babcock Ranch resident Jason Liebman is the owner of Perfect Real Estate Visuals, a full-service real estate photo/video company specializing in HDR property photography, aerial drone photography, 3D Virtual Tours and much more."
		},
		{
		  "category": "Plumber",
		  "subcategory": "Plumber",
		  "name": "Diversified Plumbing Services",
		  "address": "13650 Fiddlesticks Blvd, Ft Myers, FL 33912",
		  "addressurl": "https://www.google.com/maps/place/Diversified+Plumbing+Services+of+SW+Florida/@26.5515203,-81.8695039,14.25z/data=!4m5!3m4!1s0x88db15451edbf673:0x4de6ccc53a28b37d!8m2!3d26.5491925!4d-81.8537974?hl=en",
		  "phone": "239-850-6674",
		  "email": "",
		  "website": "http://diversifiedplumbingswfl.com/",
		  "image": "1y2_SHPLajoR-QdMABdo-IaZJU3QmAD4d",
		  "comment": "With 24 hour service, call any time and a friendly person will listen to your concerns and make an appointment that works with your schedule."
		},
		{
		  "category": "Plumber",
		  "subcategory": "Plumber",
		  "name": "Fox Plumbing",
		  "address": "12338 Palm Beach Blvd SE, Fort Myers, FL 33905",
		  "addressurl": "https://www.google.com/maps/place/Fox+Plumbing+inc/@26.7342117,-81.8758092,10z/data=!3m1!4b1!4m5!3m4!1s0x88db6f1eb6802ee3:0xdb7cc9a89c73a8a3!8m2!3d26.7338749!4d-81.5949256",
		  "phone": "239-694-1969",
		  "email": "rfoxplumbing@gmail.com",
		  "website": "http://foxplumbinginc.com/",
		  "image": "1yLiP5hVRjmChCSVLXJujPz-uNvZKYdGk",
		  "comment": "We offer a complete range of plumbing services, including fixture installation, water heater installation, leak repairs, and drain cleaning. We specialize in re-piping water lines for your insurance needs."
		},
		{
		  "category": "Plumber",
		  "subcategory": "Plumber",
		  "name": "West Coast Plumbing and Water Treatment",
		  "address": "5651 Halifax Ave, Suite 3, Fort Myers, FL 33912",
		  "addressurl": "https://www.google.com/maps/place/West+Coast+Plumbing+%26+Water+Treatment+LLC./@26.5313901,-81.8634068,16.13z/data=!4m5!3m4!1s0x88db70252e705515:0xa771f32b02ab21b2!8m2!3d26.5313529!4d-81.8593918?hl=en",
		  "phone": "239-340-8224",
		  "email": "service@plumbingandwater.com",
		  "website": "https://www.plumbingandwater.com/",
		  "image": "13HiDyxcNKHYwTj2ZeF0R6LBTY_W5pkN6",
		  "comment": "We provide superior Plumbing & Water Treatment Services to residential and commercial clients in the southwest Florida Area."
		},
		{
		  "category": "Pool and Spa",
		  "subcategory": "Pool, Spa",
		  "name": "EdgeWater Pools And Spa",
		  "address": "8511 Chase Preserve Dr. Naples FL 34113",
		  "addressurl": "https://www.google.com/maps/place/Edgewater+Pools+%26+Spa+Services/@26.0767557,-81.6970151,15.77z/data=!4m5!3m4!1s0x88dae17155555555:0xcbcec47271bf192a!8m2!3d26.077088!4d-81.691109",
		  "phone": "239-961-8379",
		  "email": "info@edgewaterpoolsandspa.com",
		  "website": "https://edgewaterpoolsandspa.com/",
		  "image": "1zfzRYKl1KOgXvVN-1zKG66V2um05NFl-",
		  "comment": "Edgewater Pools and Spa is a full service pool company that provides pool services and repairs throughout Southwest Florida."
		},
		{
		  "category": "Pool and Spa",
		  "subcategory": "Pool, Spa",
		  "name": "Pool Aid Services",
		  "address": "4925 Skates Cir, Fort Myers, FL 33905",
		  "addressurl": "https://www.google.com/maps/place/4925+Skates+Cir,+Fort+Myers,+FL+33905/@26.6770137,-81.7571474,12.68z/data=!4m5!3m4!1s0x88db6e3f8af3d433:0xf7cba321f06ea6ce!8m2!3d26.6741964!4d-81.7129239",
		  "phone": "239-246-0999",
		  "email": "poolaid239@gmail.com",
		  "website": "https://www.facebook.com/poolaid239",
		  "image": "1eQ7_gt337tDuEFEtBJmYswE5V7_rUu9r",
		  "comment": "Jeff Miller, owner and operator of Pool Aid, maintains pools in Babcock Ranch and comes highly recommended by fellow neighbors."
		},
		{
		  "category": "Pool and Spa",
		  "subcategory": "Pool, Hot Tub",
		  "name": "Pool Barracuda",
		  "address": "314 SE 17th ST Cape Coral FL 33990",
		  "addressurl": "https://www.google.com/maps/place/Pool+Barracuda/@26.5526339,-82.1981965,10z/data=!3m1!4b1!4m5!3m4!1s0x88db47b929933c29:0xb1dfe19c8a3e4d36!8m2!3d26.5529092!4d-81.9173128?hl=en",
		  "phone": "239-318-9982",
		  "email": "",
		  "website": "http://www.poolbarracuda.com/",
		  "image": "13dbp32wwTYzTdkJuaF-DSqxth_ucgICF",
		  "comment": "A small, family-owned pool service company that provides pool cleaning, maintenance, filter cleaning, green pool cleanup, and more."
		},
		{
		  "category": "Pool and Spa",
		  "subcategory": "Pool, Spa",
		  "name": "Tri-City Pools",
		  "address": "3750 Canal St. Fort Myers, Florida 33916",
		  "addressurl": "https://www.google.com/maps/place/Tri-City+Pools/@26.6266224,-81.8442697,15.15z/data=!4m5!3m4!1s0x88db1562322925fd:0x951a347aa4cbced4!8m2!3d26.6264871!4d-81.8362523",
		  "phone": "239-481-4122",
		  "email": "customerservice@tricitypools.com",
		  "website": "https://tricitypools.com",
		  "image": "1T16c3OBs_90Zjm0riG7vnS5KfaCB_i5h",
		  "comment": "Tri-City Pools offers pool cleaning, maintenance, and repair services throughout Southwest Florida. We service both Residential and Commercial Pools."
		},
		{
		  "category": "Pool and Spa",
		  "subcategory": "Pool, Spa",
		  "name": "V.I.Pool and Spa Maintenance",
		  "address": "",
		  "addressurl": "",
		  "phone": "201-953-4944",
		  "email": "JP05141976@hotmail.com",
		  "website": "",
		  "image": "18FzPTx5a66hflitR8ufcggOnnqdAYk0x",
		  "comment": "John Phillips, Certified Pool Tech provides pool and spa maintenance for V.I. Pool. Get in touch with John to discuss maintenance options and rates."
		},
		{
		  "category": "Power Washing",
		  "subcategory": "Power Wash",
		  "name": "Lee Pressure Services",
		  "address": "Babcock Ranch, FL",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "941-286-5708",
		  "email": "info@leepressureservices.com",
		  "website": "https://www.leepressureservices.com/",
		  "image": "1kwumyx_BmoGxfzRSr48SgLcjxBlE7-IR",
		  "comment": "Right here in Babcock Ranch, we are family owned and operated. Licensed and insured. Servicing Lee, Charlotte, Collier, Sarasota, and Hendry Counties."
		},
		{
		  "category": "Power Washing",
		  "subcategory": "Power Wash",
		  "name": "Legacy Pressure Washing and Detailing",
		  "address": "Babcock Ranch, FL",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "386-205-4428",
		  "email": "Rjones.Legacy@gmail.com",
		  "website": "https://www.facebook.com/Rjones.Legacy/",
		  "image": "1Jg2PX3lokbh5N2CODyIXkKdNNA6g1Z7M",
		  "comment": "Legacy Pressure Washing and Detailing is owned by Babcock Ranch resident, Jessie Smutney. Licensed and insured, contact Jessie for your pressure washing needs."
		},
		{
		  "category": "Power Washing",
		  "subcategory": "Power Wash",
		  "name": "Mr. Pressure Power Washing",
		  "address": "Babcock Ranch, FL",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "239-675-3131",
		  "email": "Stephaniecohen@mrspressure.com",
		  "website": "https://mrspressure.com/",
		  "image": "1KOLz66zP8Q8bH_0dvcuxKofn1_Xwly9v",
		  "comment": "Babcock Ranch residents who do the dirty work so you don't have to! We are Licensed and Insured! Serving commercial & residential customers in Lee, Charlotte and Collier Counties."
		},
		{
		  "category": "Realtor",
		  "subcategory": "Real Estate",
		  "name": "Beth Stark",
		  "address": "3414 Forum Blvd, Suite 3, Fort Myers, FL 33905",
		  "addressurl": "https://www.google.com/maps/place/3414+Forum+Blvd+%233,+Fort+Myers,+FL+33905/@26.6140142,-81.7996367,17z/data=!4m5!3m4!1s0x88db6b9924b12f43:0xf004d4642bc5b21!8m2!3d26.6141135!4d-81.797241?hl=en",
		  "phone": "573-270-5133",
		  "email": "bethstarkrealestate@gmail.com",
		  "website": "https://shesellsswfl.com/",
		  "image": "1vnzMKHMigm37yuzzIsDyu-I785wW3VNH",
		  "comment": "Whether you are buying or selling your first home, second home, vacation home, investment property, land...you name it, contact Babcock Ranch resident, Beth Stark."
		},
		{
		  "category": "Realtor",
		  "subcategory": "Real Estate",
		  "name": "Fides \"Faith\" Sirakis",
		  "address": "",
		  "addressurl": "",
		  "phone": "239-980-3190",
		  "email": "floridarealestatebyfaith@gmail.com",
		  "website": "https://faith.cainepremierproperties.com/",
		  "image": "10I5-75KRXz7tKmitvYkQiiWTp3_OemOn",
		  "comment": "Realtor, Fides \"Faith\" Sirakis is passionate and sincere about the needs and goals of her clients. Faith prides herself in helping families and retirees to explore and relocate to America's First Solar Powered City, Babcock Ranch!"
		},
		{
		  "category": "Realtor",
		  "subcategory": "Real Estate",
		  "name": "Jason Liebman",
		  "address": "",
		  "addressurl": "",
		  "phone": "954-675-2435",
		  "email": "",
		  "website": "https://www.parklandluxuryagent.com/",
		  "image": "17yYgU1BYefWDBgkNRYTCnJVliZbekkuy",
		  "comment": "Babcock Ranch resident Jason Liebman brings a wealth of knowledge and expertise about buying and selling real estate. It's not the same everywhere, so you need someone you can trust for up-to-date information."
		},
		{
		  "category": "Realtor",
		  "subcategory": "Real Estate",
		  "name": "Kurt E Hoenig",
		  "address": "12220 Towne Lake Dr. # 30, Fort Myers, FL, 33913",
		  "addressurl": "https://www.google.com/maps/place/United+Real+Estate+Infinity+Kurt+E+Hoenig/@26.5655679,-81.7532499,17z/data=!3m1!4b1!4m5!3m4!1s0x88db6d264d70f18d:0x9da66d7fcd83752a!8m2!3d26.5655631!4d-81.7510559",
		  "phone": "239-595-2200",
		  "email": "kurthoenigunitedinfinity@gmail.com",
		  "website": "http://southwestfloridapropertymanagers.com/index.html",
		  "image": "1oYNXv0VYXGUmi5keUI44FP2sZcE4N35m",
		  "comment": "Highly professional, Kurt Hoenig is an agent and Babcock Ranch resident that goes above and beyond. Southern Hospitality with a Midwest work ethic, call Kurt today."
		},
		{
		  "category": "Realtor",
		  "subcategory": "Real Estate",
		  "name": "Luann Collins",
		  "address": "",
		  "addressurl": "",
		  "phone": "239-494-0025",
		  "email": "Luann@ParagonFloridaRealty.com",
		  "website": "https://luanncollins.paragonfloridarealty.com/",
		  "image": "1w1Gn3LctZ5oWHFHiThaqNLiWu0loojoU",
		  "comment": "Paragon Florida Realty is a full service Real Estate Brokerage & Dual State Brokerage- helping buyers and sellers with their next move in the states of Illinois & Florida. As a Dual State Agent, Luann Collins is Managing Broker in the State of Illinois too!"
		},
		{
		  "category": "Realtor",
		  "subcategory": "Real Estate",
		  "name": "Mike Serfozo",
		  "address": "",
		  "addressurl": "",
		  "phone": "330-647-1057",
		  "email": "mikeserfozo@city2shore.com",
		  "website": "https://mikeserfozo.c2sgo.com/",
		  "image": "1iIT3FoiyL1r_9OiZzV2bgbJ3i2gn-3df",
		  "comment": "Mike Serfozo is one of the first residents of Babcock Ranch and former employee of the developer. Mike is extremely passionate about his work and, with experience in the Engineering and Hospitality fields, brings attention to detail and excellent customer service."
		},
		{
		  "category": "Realtor",
		  "subcategory": "Real Estate Photography",
		  "name": "Perfect Real Estate Visuals",
		  "address": "",
		  "addressurl": "",
		  "phone": "954-546-8611",
		  "email": "perfectREvisuals@gmail.com",
		  "website": "https://www.perfectrealestatevisuals.com/",
		  "image": "1dWjw63TCTfQnE_r_kCDfCwO-IDJA3MO1",
		  "comment": "Babcock Ranch resident Jason Liebman is the owner of Perfect Real Estate Visuals, a full-service real estate photo/video company specializing in HDR property photography, aerial drone photography, 3D Virtual Tours and much more."
		},
		{
		  "category": "Realtor",
		  "subcategory": "Real Estate",
		  "name": "Smart Realty Homes",
		  "address": "2804 Del Prado Blvd S Unit 102, Cape Coral FL 33904",
		  "addressurl": "https://www.google.com/maps/place/Smart+Realty+of+Florida/@26.5997122,-81.9440568,17z/data=!3m2!4b1!5s0x88db40c58c855899:0x1140083d43300fe9!4m5!3m4!1s0x88db40c7d3328d11:0xad6d5e3bcb63e41e!8m2!3d26.5997074!4d-81.9418628?hl=en",
		  "phone": "239-288-0039",
		  "email": "Estrella@smartrealtyhomes.com",
		  "website": "https://smartrealtyhomes.com/",
		  "image": "1d0yJYd0pylIUkuReh4BRPTreTPfvj_eS",
		  "comment": "Estrella Ruiz is the owner and broker of Smart Realty Homes, a company that specializes in serving international clients. Smart Realty of Florida will provide you with an excellent Real Estate experience."
		},
		{
		  "category": "Realtor",
		  "subcategory": "Real Estate",
		  "name": "Tiffany Greene",
		  "address": "3414 Forum Blvd, Suite 3, Fort Myers, FL 33905",
		  "addressurl": "https://www.google.com/maps/place/3414+Forum+Blvd+%233,+Fort+Myers,+FL+33905/@26.6140142,-81.7996367,17z/data=!4m5!3m4!1s0x88db6b9924b12f43:0xf004d4642bc5b21!8m2!3d26.6141135!4d-81.797241?hl=en",
		  "phone": "239-322-0153",
		  "email": "tiffany@realtortiffanygreene.com",
		  "website": "https://www.realtortiffanygreene.com/",
		  "image": "1vnzMKHMigm37yuzzIsDyu-I785wW3VNH",
		  "comment": "If you are looking for a realtor,  look no further. Tiffany Greene is the ideal choice. Patient, honest, and professional."
		},
		{
		  "category": "Solar Installation",
		  "subcategory": "Rooftop Solar",
		  "name": "Tropical Solar, LLC",
		  "address": "12557 New Brittany Blvd #3V-20, Fort Myers, FL 33907",
		  "addressurl": "https://www.google.com/maps/place/Tropical+Solar,+LLC/@26.5598732,-81.8830473,17z/data=!3m1!4b1!4m5!3m4!1s0x88db3ffa240b44bd:0x1c0ffacad9de0a68!8m2!3d26.5598684!4d-81.8808533\n",
		  "phone": "239-799-2074",
		  "email": "justin@tropicalsolar.net",
		  "website": "https://www.tropicalsolar.net/",
		  "image": "1_4a9qrgSiN73FAbewGVzAxZoF6DC_PdV",
		  "comment": "Justin Sarles, a Babcock Ranch resident, is the CEO and owner of Tropical Solar, LLC, one of the top rated solar panel installation and service companies in the nation!"
		},
		{
		  "category": "Sport and Recreation",
		  "subcategory": "Bicycle",
		  "name": "JRA Bicycle Company",
		  "address": "1089 N Tamiami Trail, North Fort Myers, FL 33903",
		  "addressurl": "https://www.google.com/maps/place/JRA+Bicycle+Company/@26.664113,-81.8805395,17z/data=!3m1!4b1!4m5!3m4!1s0x88db421c987eb30d:0xc35ad1f7abf5fb58!8m2!3d26.6641082!4d-81.8783455?hl=en",
		  "phone": "239-997-1399",
		  "email": "",
		  "website": "https://www.jrabicycles.com",
		  "image": "1xbcMBFgMRqf_3XsXYk17nRHFoXsxJ0AH",
		  "comment": "JRA will custom build your bike or you can buy it right off the floor. We perform simple fix-it solutions or complex rebuilds from the frame up. Our aim is to make all bicycle riders happy."
		},
		{
			"category": "Travel",
			"subcategory": "Transportation",
			"name": "Bernie Valdes",
			"address": "Babcock Ranch, FL",
			"addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
			"phone": "786-277-7866",
			"email": "",
			"website": "",
			"image": "1vNZVt13YF8KAFtbstS19pMTk0AYCVGTm",
			"comment": "Bernie Valdes is a Babcock Ranch resident and retired police officer providing Babcock Ranch with rides to and from airports."
		  },
		{
		  "category": "Travel",
		  "subcategory": "Transportation",
		  "name": "Bob Marik (Babcock Bob)",
		  "address": "Babcock Ranch, FL",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "330-509-2924",
		  "email": "",
		  "website": "",
		  "image": "1grDn7a6KTqozuLzERmNvxwM7xZwcjw0k",
		  "comment": "Babcock Bob provides airport transportation 24/7, 365 for Babcock Ranch residents only. Fully insured."
		},
		{
		  "category": "Travel",
		  "subcategory": "Cruise, Vacation",
		  "name": "Raffone Travel",
		  "address": "Babcock Ranch, FL",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "239-887-5321",
		  "email": "Veronica.Raffone@cruiseplanners.com",
		  "website": "https://www.raffonetravel.com/",
		  "image": "1euXnQCFssQvVePIMxhqkn2vaDjeQ8u_q",
		  "comment": "Veronica Raffone, a Babcock Ranch resident, is a Travel Advisor & Special Needs Group Certified Accessible Travel Advocate. Let Veronica handle all your vacation and cruise planning needs."
		},
		{
		  "category": "Travel",
		  "subcategory": "Transportation",
		  "name": "Ron’s Airport Transportation",
		  "address": "",
		  "addressurl": "",
		  "phone": "239-440-4859",
		  "email": "ron@ronsairport.com",
		  "website": "https://www.ronsairport.com/",
		  "image": "1tYC0USxBOLvLCOwREQzadc28UNXHrYU2",
		  "comment": "Ron Lomonaco is a Babcock Ranch resident and owner of Ron’s Airport Transportation (licensed and insured). Need a trip to the airport? Ask about new client discounts for Babcock Ranch residents."
		},
		{
		  "category": "TV Streaming",
		  "subcategory": "youtube",
		  "name": "Amazon Fire TV Stick 4K Set Up",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "UdG9ewe3mow",
		  "image": "",
		  "comment": "<strong>How To Setup An Amazon Fire TV Stick 4K</strong>"
		},
		{
		  "category": "TV Streaming",
		  "subcategory": "youtube",
		  "name": "Roku Streaming Stick + Set Up",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "8rmWm17ho4I",
		  "image": "",
		  "comment": "<strong>How To Setup A Roku Streaming Stick + 4K</strong>"
		},
		{
		  "category": "TV Streaming",
		  "subcategory": "ad_listing",
		  "name": "Amazon Ad",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "https://amzn.to/3aDO8ze",
		  "image": "11WEX1krky_uzxly4plRzbnm0_mj6F-Oc",
		  "comment": "<strong>Amazon Fire TV Stick 4K</strong><br />Watch favorites from Netflix, YouTube, Prime Video, Disney+, Apple TV+, HBO Max, and more."
		},
		{
		  "category": "TV Streaming",
		  "subcategory": "ad_listing",
		  "name": "Amazon Ad",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "https://amzn.to/3dzA63K",
		  "image": "1Rptehad9ImrJT5e0W8knz0ZM2Zlz_b_D",
		  "comment": "<strong>Roku Streaming Stick+ | HD/4K/HDR</strong><br />Endless entertainment: Stream what you love, including free TV, live news, sports, and more."
		},
		{
		  "category": "TV Streaming",
		  "subcategory": "youtube",
		  "name": "Live TV Streaming Comparison",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "7yuvmsMjWeo",
		  "image": "",
		  "comment": "<strong>Live TV Streaming Comparison</strong><br />YouTube TV vs. Hulu + Live TV vs. Sling vs. AT&T TV vs. Fubo and more"
		},
		{
		  "category": "TV Streaming",
		  "subcategory": "informational",
		  "name": "Hulu Live TV",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "https://www.hulu.com/live-tv",
		  "image": "1Vt3Pfhyqr7Rg964dGmySdBshc69OXRsf",
		  "comment": "<strong>Hulu + Live TV</strong>\n<br />Local channels, 65+ cable channels, access to the entire Hulu streaming library, up to 200hr DVR with add-on. Amazon Fire Stick, Roku Media Player, Apple TV, phone/tablet/computer, or smart TV required."
		},
		{
		  "category": "TV Streaming",
		  "subcategory": "informational",
		  "name": "Sling",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "https://www.sling.com/",
		  "image": "1RBndf1gCpVg6hprYg2uDlLOisr0UwYfK",
		  "comment": "<strong>Sling</strong><br />Antenna required for local channels, 50+ cable channels, 50 hour DVR. Amazon Fire Stick, Roku Media Player, Apple TV, phone/tablet/computer, or smart TV required."
		},
		{
		  "category": "TV Streaming",
		  "subcategory": "informational",
		  "name": "YouTube TV",
		  "address": "",
		  "addressurl": "",
		  "phone": "",
		  "email": "",
		  "website": "https://tv.youtube.com/welcome/?zipcode=33982",
		  "image": "1KFdfyqwf8QZ9y__Vm-kcXkGlJBldhzvP",
		  "comment": "<strong>YouTube TV</strong><br />Local channels and PBS, 85+ cable channels, unlimited DVR (recordings expire in 9 months). Amazon Fire Stick, Roku Media Player, Apple TV, phone/tablet/computer, or smart TV required."
		},
		{
		  "category": "Water Filtration",
		  "subcategory": "Water Filtration",
		  "name": "Merlino Consulting",
		  "address": "Babcock Ranch, FL",
		  "addressurl": "https://www.google.com/maps/place/Babcock+Ranch/@26.7820877,-81.7487505,15z/data=!4m13!1m7!3m6!1s0x88db631a4a6ee999:0xd03a3274f5136576!2sBabcock+Ranch,+FL+33982!3b1!8m2!3d26.8739165!4d-81.7194842!3m4!1s0x88db57b141ea9c43:0x5876a9bc2db5bd3b!8m2!3d26.7841793!4d-81.7445335?hl=en",
		  "phone": "239-565-7172",
		  "email": "merlinodraftco@gmail.com",
		  "website": "https://merlinoconsultants.com/",
		  "image": "1JSBUFtEgEVGApnQvvrTE3s8TlQP_7H7n",
		  "comment": "Babcock Ranch resident, Pietro Merlino of Merlino Consulting, offers whole house water filtration and softening systems, reverse osmosis, and non-reverse osmosis under sink filtration systems. Call Pietro to discuss custom options to fit your needs."
		},
		{
		  "category": "Water Filtration",
		  "subcategory": "Water Filtration",
		  "name": "West Coast Plumbing and Water Treatment",
		  "address": "5651 Halifax Ave, Suite 3, Fort Myers, FL 33912",
		  "addressurl": "https://www.google.com/maps/place/West+Coast+Plumbing+%26+Water+Treatment+LLC./@26.5313901,-81.8634068,16.13z/data=!4m5!3m4!1s0x88db70252e705515:0xa771f32b02ab21b2!8m2!3d26.5313529!4d-81.8593918?hl=en",
		  "phone": "239-340-8224",
		  "email": "service@plumbingandwater.com",
		  "website": "https://www.plumbingandwater.com/",
		  "image": "13HiDyxcNKHYwTj2ZeF0R6LBTY_W5pkN6",
		  "comment": "We provide superior Plumbing & Water Treatment Services to residential and commercial clients in the southwest Florida Area."
		}
	]





	/***** Choose Random Header Image *****/

		let headerImages = ['header_1920x900_1.jpg', 'header_1920x900_2.jpg', 'header_1920x900_3.jpg'];
		let randomHeaderImage = 'images/header/' + headerImages[Math.floor(Math.random() * headerImages.length)];

		$('#top-banner').css('background-image', 'url(' + randomHeaderImage + ')');

	/***** Load listingsData *****/

		loadData();

	/***** Display Site After Delay *****/

		$('.container').delay(500).animate({ opacity: 1 }, 700);

	/***** Nav Bar *****/

		// Open Side Nav

		$('.open-nav').click(function() {
			$('#nav-menu-container').animate({right: '0'});
		});

		// Close Side Nav

		function closeNav() {
			$('#nav-menu-container').animate({right: '-100%'});
		}

		$('.close-nav').click(function() {
			if($('#category-nav-list').hasClass('open-cat-nav-list')) {
				toggleCategoryDropdown();
			}
			closeNav();
		});

		$('.nav-menu').on('click', 'li a', function() {
			if($('#category-nav-list').hasClass('open-cat-nav-list')) {
				toggleCategoryDropdown();
			}
			if($(window).width() < 577) {
				closeNav();
			}
		});

	/***** Categories Nav Dropdown Item *****/

		function toggleCategoryDropdown() {
			if($('#category-nav-list').hasClass('open-cat-nav-list')) {
				$('.category-nav-link .fas.fa-angle-down').css({'transform': 'rotate(0deg)'});
			} else {
				$('.category-nav-link .fas.fa-angle-down').css({'transform': 'rotate(180deg)'});
			}
			$('#category-nav-list').toggleClass('open-cat-nav-list');
		}

		$('.category-nav-link').click(function() {
			toggleCategoryDropdown();
		});

	/***** Smooth Scroll *****/

	$('.main-menu, #intro').on('click', "a[href^='#']", function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;

			// The optional number (800) milliseconds to scroll to the specified area
			$('html, body').animate({
					scrollTop: $(hash).offset().top - 65
				}, 800, function(){
			});
		} // End if
	});

});

function loadData() {

	// fontawesome icons

	let addressIcon = '<i class="fas fa-map-marker-alt"></i>';
	let phoneIcon = '<i class="fas fa-phone-volume"></i>';
	let emailIcon = '<i class="fas fa-envelope"></i>';
	let websiteIcon = '<i class="fas fa-globe-americas"></i>';

	// image data
	
	let placeholderImage = '1I8oyoT6JUOF_oyvYUgoQtJktS_FEwR4h';
	let listingImage;

	// first category in listingsData

	let currentCategory = listingsData[0].category;
	// console.log('current category: ' + currentCategory);
	let currentCategoryLowerCase = currentCategory.replace(/\s+/g, '').toLowerCase();

	let categoryTitle = '<h2 id="' + currentCategoryLowerCase + '" class="category-title">' + currentCategory + '</h2>';
	let categoryList = '<ul class="' + currentCategoryLowerCase + ' category-list"></ul>';
	$('#data-display').append(categoryTitle).append(categoryList);

	// Create Category Nav Items

	function createCatNavItem() {
		let catNavItem = 	'<li class="category-nav-item">' +
								'<a href="#' + currentCategoryLowerCase + '">' +
									currentCategory +
								'</a>' +
							'</li>';
		$('#category-nav-list').append(catNavItem);
	}

	createCatNavItem();

	// Generate listings

	listingsData.map(entry => {

		if(entry.category) {

			// Listings
			listingImage = entry.image ? entry.image : placeholderImage;

			// Ad Listing
			if(entry.subcategory == 'ad_full_width') {
				listing = 	'<li class="item commercial-placement-full-width">' +
								'<a href="' + entry.website + '" target="_blank">' +
									'<img alt="Banner Placement" src="https://drive.google.com/uc?id=' + listingImage +
									'" />' +
								'</a>' +
							'</li>';
			} else if(entry.subcategory == 'ad_listing') {
				listing =	'<li class="item commercial-placement-listing">' +
								'<img alt="Listing Placement" src="https://drive.google.com/uc?id=' + listingImage +
								'" />' +
								'<span class="listing-desc">' + entry.comment + '</span>' +
								'<a href="' + entry.website + '" target="_blank">Shop Amazon Now</a>' +
							'</li>';
			} else if(entry.subcategory == 'informational') {
				listing =	'<li class="item informational-listing">' +
								'<img alt="Listing Image" src="https://drive.google.com/uc?id=' + listingImage +
								'" />' +
								'<span class="listing-desc">' + entry.comment + '</span>' +
								'<a href="' + entry.website + '" target="_blank">View Now</a>' +
							'</li>';
			} else if(entry.subcategory == 'youtube') {
				// Youtube video
				listing =	'<li class="item video-listing">' +
								'<img alt="Video Thumbnail" src="https://i.ytimg.com/vi/' + entry.website +
								'/hqdefault.jpg" />' +
								'<span class="listing-desc">' + entry.comment + '</span>' +
								'<a href="https://www.youtube.com/watch?v=' + entry.website + '" target="_blank">Watch Video</a>' +
							'</li>';
			} else {
				// Regular Listings
				listing =   '<li class="item">' +
								'<div class="image">' +
									'<span class="field"><img alt="Listing Image" src="https://drive.google.com/thumbnail?id=' + listingImage + '" /></span>' +
								'</div>' +
								'<div class="info">' +
									'<span class="field name">' + entry.name + '</span>' +
									'<span class="field">' + entry.subcategory + '</span>' +
									'<span class="field">' + addressIcon + '<a href="' + entry.addressurl + '" target="_blank">' + entry.address + '</a></span>' +
									'<span class="field">' + phoneIcon + '<a href="tel:+1-' + entry.phone + '" target="_blank">' + entry.phone + '</a></span>' +
									'<span class="field">' + emailIcon + '<a class="nowrap" href="mailto:' + entry.email + '">' + entry.email + '</a></span>' +
									'<span class="field">' + websiteIcon + '<a class="nowrap" href="' + entry.website + '" target="_blank">' + entry.website + '</a></span>' +
								'</div>' +
								'<span class="field">' + entry.comment + '</span>' +
							'</li>';
			}

			if(entry.category === currentCategory) {
				// Listings
				$('.' + currentCategoryLowerCase).append(listing);
			} else {
				// New Category
				currentCategory = entry.category;
				currentCategoryLowerCase = currentCategory.replace(/\s+/g, '').toLowerCase();
				categoryTitle = '<h2 id="' + currentCategoryLowerCase + '" class="category-title">' + currentCategory + '</h2>';
				categoryList = '<ul class="' + currentCategoryLowerCase + ' category-list"></ul>';
				$('#data-display').append(categoryTitle).append(categoryList);
				$('.' + currentCategoryLowerCase).append(listing);
				// New Category Nav Items
				createCatNavItem();
			}

		} // end -- if(entry.category)
		
	})

	
}