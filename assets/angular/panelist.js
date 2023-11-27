"use strict";

app.controller("PanelistController", [
  "$scope",
  "$http",
  "$timeout",
  "SweetAlert",
  "$sce",
  function ($scope, $http, $timeout, SweetAlert, $sce) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get("id");

    if (name) {
      // Use the parameter value as needed
      findItemById(name);

      console.log("profile", $scope.profile);
    } else {
      window.location.href = `speakers.html`;
    }

    // Function to filter array by id
    function findItemById(itemId) {
      $scope.panelistList = [
        {
          id: "1",
          title: "Mr",
          firstname: "Kabir",
          lastname: "Ademoh",
          position: "Nigeria Country Lead",
          org: "Netherlands-African Business Council",
          bio: `<p>Kabir Ademoh is the project coordinator for the NABC’s Seeds For Change (S4C) Project in Nigeria which aims to help Nigerian farmers enhance their yield and quality of produce through high-quality hybrid vegetable seeds and biological crop protection and backed by world-class training and expertise in horticultural production.</p>
        <p>Seed For Change (S4C) is an initiative supported by the government of the Netherlands that works in close collaboration with the Dutch Embassy office and six global leaders in vegetable seeds and biological protection. S4C is implemented by the Netherlands African Business Council (NABC) from within Kano and has reached over 500 vegetable farmers with over 30 variety assortments  demonstrated in the past year.</p>`,
          image: "assets/img/panelist/kabir.jpg",
        },
        {
          id: "2",
          title: "Dr",
          firstname: "Akintoye",
          lastname: "Olagbaju",
          position: "Chief Research Scientist, The Durable Crops Department",
          org: "Nigerian Stored Products Research Institute",
          bio: `<p>Akintoye Olagbaju is a Chief Research Scientist (Postharvest Entomologist) in the Durable Crops Research Department at the Nigerian Stored Products Research Institute (NSPRI), Headquarters, Ilorin, Kwara State, Nigeria. He has been working on storage insect pest’s management for more than 25 years in grain, oil seeds and beverages postharvest research at NSPRI.</p>
        <p>He was the program leader for grains and pulses and is currently the Programme Leader for Oil seeds and beverage crops in NSPRI. He has extensive research interests in the prevention and control of insect pests of stored agricultural crops and outreach services; using integrated pest management and biological control methods. He has led, facilitated and participated in research and stakeholders’ trainings on good postharvest management practices. He has authored and co-authored a number of technical publications to his credit</p>`,
          image: "assets/img/panelist/akintoye.jpg",
        },
        {
          id: "3",
          title: "Dr",
          firstname: "Grace",
          lastname: "Otitodun",
          position:
            "Chief Research Scientist (Postharvest Entomologist), The Durable Crops Department",
          org: "Nigerian Stored Products Research Institute",
          bio: `<p>Dr Grace O. Otitodun is a Chief Research Scientist (Postharvest Entomologist) in the Durable Crops Research Department at the Nigerian Stored Products Research Institute (NSPRI), Headquarters, Ilorin, Kwara State, Nigeria. She has over 20 years’ experience in grain postharvest research at NSPRI. She is the Programme Leader for Cereals and Pulses Programme in NSPRI. Grace Otitodun is a Fellow of Norman Borlaug Scientific Exchange Program and a Fellow of Nigerian Science Leadership Program.</p>
        <p>Her broad research and extension interest are integrated pest management and biological control of stored products pests. She has participated in donor (International and local) funded research projects serving as Lead Principal Investigator and also as facilitator in stakeholders trainings on good postharvest agricultural practices. She has authored and co-authored quite a number of technical publications to her credit. (ORCID ID - https://orcid.org/0000-0001-8183-1698).</p>`,
          image: "assets/img/panelist/grace.jpg",
        },
        {
          id: "4",
          title: "Mr",
          firstname: "Rezende",
          lastname: "Leontino",
          position:
            "Director, Developing Internationally The UPOV Plant Variety Protection System",
          org: "International Union for the Protection of New Varieties of Plants (UPOV)",
          bio: `<p>Agronomic Engineer and Agribusiness Administrator, specializing in plant breeding, Rezende Taveira Leontino serves as the Director spearheading the international development of the UPOV Plant Variety Protection System. With a wealth of experience, he has been an integral part of UPOV since 2012, overseeing its global initiatives</p>
        <p>Prior to his current role, Leontino held key positions at the Ministry of Agriculture in Brazil, contributing significantly to the advancement of plant variety protection and trade. His expertise extends to collaborations with horticultural production companies in both Brazil and Spain.</p>`,
          image: "assets/img/panelist/leontino.jpg",
        },
        {
          id: "5",
          title: "Mr",
          firstname: "David",
          lastname: "Wainaina",
          position: "Program Manager",
          org: "Resourced Global",
          bio: `<p>With a rich background spanning over two decades in business development across Sub-Saharan Africa, David is deeply passionate about empowering smallholder farmers through innovative products and technologies. Recognized as a skilled networker and community builder, David specialize in fostering cross-sector collaborations that drive program success.</p>
        <p>Currently managing the IMAGE and SMIA programs in Eastern Africa and Nigeria, He collaborates with high-level stakeholders to facilitate the monitoring, adoption, and turnover of new and improved seed varieties. Before joining Resourced, He successfully led diverse business and commercial operations in Tropical Africa, including seed variety development in targeted R&D sites.</p>
        <p>His expertise also extends to the pharmaceutical and public health sectors, where He engages with various stakeholders, including the private sector, government, donors, and implementing partners. This multifaceted experience enables him to contribute to the management and successful outcome of strategic projects across multiple countries.</p>
        <p>Fluent in Swahili, English, and French, with advanced proficiency in Portuguese, He holds an MBA and a BCom from the University of Pune in India.</p>
        `,
          image: "assets/img/panelist/david.jpg",
        },
        {
          id: "6",
          title: "Ms",
          firstname: "Rachel",
          lastname: "Opeyemi Alao",
          position: "Animal Scientist",
          org: "National Animal Production Research Institute NAPRI",
          bio: `<p>Meet Rachel Opeyemi Alao, an accomplished Animal Scientist currently serving at the National Animal Production Research Institute, Ahmadu Bello University, Shika, Zaria. As the Project Lead for the Swine Unit within the Swine and Rabbit Research Programme, she has established herself as a key contributor to the institute's research endeavors.</p>
        <p>Hailing from Lagos state, Rachel earned her B. Tech degree in Agricultural Technology from the Federal University of Technology, Minna, Niger State. Currently, she is on the verge of completing her MSc. in Animal Breeding and Genetics at Ahmadu Bello University, Zaria, Kaduna State, showcasing her commitment to continuous learning and specialization in her field.</p>
        <p>A Registered Animal Scientist (RAS), Rachel is actively engaged in various societies and associations related to Animal Production, Sciences, and Genetics. Her memberships highlight her dedication to staying connected with the broader scientific community and staying informed about the latest developments in her areas of expertise.</p>
        <p>Rachel's primary area of interest lies in the Genetic and Reproductive improvements of livestock species. Her work involves conducting quality scientific research, imparting knowledge through teaching, contributing to extension services for development, and actively participating in impactful community service initiatives.</p>
        <p>As an emerging leader in the field, Rachel Opeyemi Alao exemplifies a passion for advancing the science of Animal Breeding and Genetics, demonstrating a commitment to both academic and practical aspects of her profession.</p>
        `,
          image: "assets/img/panelist/rachel.png",
        },
        {
          id: "7",
          title: "Dr",
          firstname: "Ibitoye",
          lastname: "Oyewale",
          position: "Chief Executive Officer",
          org: "Premier Seed Nigeria Limited",
          bio: `
        <p>Dr. Ibitoye Oyewale is a highly accomplished professional with a rich educational background and extensive experience in the fields of accounting, banking, finance, and information technology. Holding a Bachelor's degree in Accounting from the University of Ado Ekiti, a Master's degree in Banking and Finance from Ahmadu Bello University, Zaria, and a Doctorate degree in Information Technology and Strategic Management from Liberal Bilingual University, Togo, he has demonstrated a commitment to continuous learning and academic excellence. As a fellow of multiple prestigious institutes, including the Institute of Chartered Accountant of Nigeria and the Chartered Institute of Information and Strategy Management, he exemplifies a high level of expertise in his domains.</P>
        <p>Throughout his career, Dr. Ibitoye has proven to be a consummate technocrat and trailblazer, excelling in various roles related to internal control, audit, finance, financial control, operations, and seed business management. His leadership journey with Premier Seed Nigeria Limited began in 2009 as an Internal Auditor, and over the years, he ascended through the ranks, eventually becoming the Managing Director/CEO in May 2023. His ascent attests to his prowess in strategy management, financial administration, and overall organizational leadership. Dr. Ibitoye is known for his commitment to diversity, flexibility in alliances, and his genuine appreciation for his team members.</p>
        <p>Aside from his professional achievements, Dr. Ibitoye is a recipient of numerous honors and distinctions, reflecting his contributions to financial management, leadership, and positive change. As a mentor, he has dedicated decades to inspiring others, participating in various seminars, workshops, and conferences both locally and internationally. His interests extend beyond the professional realm, encompassing a love for reading, sports, and counseling. Happily married and blessed with children, Dr. Ibitoye Oyewale embodies a holistic approach to life, combining professional success with personal fulfillment.</p>
        `,
          image: "assets/img/panelist/ibitoye.jpg",
        },
        {
          id: "8",
          title: "Dr",
          firstname: "Kouamé",
          lastname: "Miézan",
          position: "Executive Director",
          org: "Africa Seeds",
          bio: `
        <p>On the 12 December 2013, Dr. Kouamé Miézan was appointed as the Executive Director, with the mission to strengthen the activities of the Network. Dr. Miézan, a plant breeder by training, began his career at the Institute of Research for Development (IRD), then at AfricaRice (formerly WARDA) as a senior rice breeder. He served thereafter several management and coordination positions in regional and international organizations (AfricaRice, FAO).</P>
        <p>Holding a PhD in Plant Breeding and Genetics from Kansas State University (USA), Dr. Miézan has a proven expertise and experience in breeding programs and in the seed sector, as well as in the design and management of programs and projects for research and development. He also has experience in the development of inter-institutional relations. Dr. Miézan has been member of many research networks on rice.</p>       
        `,
          image: "assets/img/panelist/kouame.jpg",
        },
        {
          id: "9",
          title: "Dr",
          firstname: "Yunusa",
          lastname: "M. ISHAKU",
          position: "Assistant Director, Extension and Linkages",
          org: "National Animal Production Research Institute NAPRI",
          bio: `
        <p>Dr. Yunusa M. Ishaku is a distinguished professional with a Ph.D. in Animal Science, currently serving as the Assistant Director of Extension and Linkages at the National Animal Production Research Institute (NAPRI/ABU) in Zaria. Additionally, he holds the position of Programme Leader for the Feeds and Nutrition Research Programme within the institute. Originating from Niger State, Dr. Ishaku has built an impressive academic and professional profile.</p>       
        <p>His educational journey began with a Bachelor's degree in Agriculture from the Federal University of Technology, Minna, Niger State. He furthered his studies at Ahmadu Bello University, Zaria, Kaduna State, where he earned both his MSc and Ph.D. in Animal Science.</p>
        <p>Dr. Ishaku has contributed significantly to the field, boasting an extensive portfolio of local papers and journal publications. His expertise lies in Pasture Agronomy, Utilization, and Range Management, reflecting a profound commitment to advancing knowledge in these areas.</p>
        <p>As a Registered Animal Scientist (RAS), Dr. Ishaku is actively engaged in various professional societies and associations related to Animal Production and Sciences. His memberships attest to his dedication to staying abreast of developments in the field, fostering collaboration, and contributing to the growth of the scientific community.</p>
        <p>With a wealth of experience and a passion for his specialization, Dr. Yunusa M. Ishaku stands as a key figure in the advancement of animal science and agricultural research in Nigeria.</p>
        `,
          image: "assets/img/panelist/yunusa.png",
        },
        {
          id: "10",
          title: "Dr",
          firstname: "Hillary",
          lastname: "Mireku Botey",
          position: "Senior Research Scientist",
          org: "CSIR-Crops Research Institute",
          bio: `
        <p>Dr. Hillary Mireku Botey is a Senior Research Scientist in the field of Seed Science at CSIR-Crops Research Institute. He is the Head of the Biotechnology, Seed and Postharvest Division at CRI. His research focus has been seed physiological and biochemical traits as impacted by maturation, climate change and abiotic stresses. Primary interest is germination requirements for neglected and underutilized crop species  and how they may be affected under climate change conditions.</p>
        <p>Dr. Botey further has expertise in seed systems of vegetatively propagated crops and vegetables</P>       
        <p>Dr. Hillary Mireku Botey also holds a Masters in Intellectual Property with substantial knowledge in Plant variety protection, use of patent information for agricultural research, innovation and technology transfer. He is into Intellectual Property Rights Advocacy and Institutional IP Policy development as well. In his function as the Intellectual Property Officer of the Institute, Dr. Botey is responsible for reviewing and advising management on on IP matters. He has successfully, licensed for the first time in the history of the Institute nine (9) crop varieties to seed companies covering Maize, Soybean and Tomato. He is the IP Adviser to the Institute on IP ownership in MOUs between the Institute and donor partners, the private sector and third parties regarding research agreements, contracts and crop variety licensing and manages Material Transfer Agreements and Access and Benefit-Sharing Agreements.</p>
        <p>Dr. H. M. Botey holds a PhD in Seed Science from the University of Eldoret, Kenya, Master in Intellectual Property (MIP) from Africa University, Zimbabwe, MSc. Seed Science and Technology and BSc. Agriculture from Kwame Nkrumah Univeristy of Science and Technology, Kumasi, Ghana.  He has been a seed scientist with the CSIR-Crops Research Institute since 2011 and former Head of the Seed Technology Unit of the Biotechnology, Seed and Postharvest (BSP) Division of the Institute.</p>
        <p>He is also a Lecturer at the CSIR College of Science and Technology (CCST) responsible for teaching Seed Science and Technology. Dr. Hillary Mireku Botey was recently awarded a Bentham-Moxon Trust Fund for research at the Millennium Seed Bank of Royal Botanic Gardens, Kew, UK. Dr. Hillary Mireku Botey is the lead author in most of his scientific publications and led Donor Funded Projects (AATF-USAID, IFDC-USAID, KAFACI). </p>
        `,
          image: "assets/img/panelist/mireku.jpg",
        },
        {
          id: "11",
          title: "Dr",
          firstname: "Ahmed",
          lastname: "S. Abdullahi",
          position: "Animal Scientist",
          org: "National Animal Production Research Institute NAPRI",
          bio: `
        <p>Dr. Ahmed S. Abdullahi, a dedicated Animal Scientist, embarked on his academic journey at the University of Maiduguri, where he earned his first degree. Commencing his professional career as an Assistant Research Fellow at NAPRI/ABU Shika-Zaria, he has ascended to the position of Research Fellow I. His academic pursuits led him to Ahmadu Bello University, Zaria, where he successfully completed his M.Sc and Ph.D. degrees.</p>       
        <p>Dr. Abdullahi's primary focus is in the specialized field of Pasture Agronomy and Utilization. He exhibits a keen interest in enhancing animal performance on forages through the refinement of ration formulation and intake improvement. As a testament to his expertise, he currently serves as the Head of the Forage Production Unit at the institute.</p>
        <p>With a commitment to advancing knowledge in his field, Dr. Abdullahi has actively contributed to research endeavors. His work not only encompasses the intricacies of pasture agronomy but also delves into strategies for optimizing animal performance through innovative approaches to forage utilization.</p>
        <p>As a Research Fellow, Dr. Ahmed S. Abdullahi continues to make valuable contributions to the scientific community, particularly in the realms of forage production and animal performance improvement. His leadership as the Head of the Forage Production Unit underscores his commitment to driving advancements in these crucial areas of animal science.</p>
        `,
          image: "assets/img/panelist/ahmed.png",
        },
        {
          id: "12",
          title: "Ms",
          firstname: "Nunnsi",
          lastname: "Ojong",
          position: "Actress & Model",
          org: "Creative Industry",
          bio: `
        <p>I am Nunnsi Ojong, a talented and versatile individual hailing from the culturally rich Cross River State in Nigeria. My academic background includes a Bachelor of Science degree in Genetics & Biotechnology, reflecting my intellectual curiosity and commitment to understanding the intricacies of life sciences.</p>       
        <p>In the entertainment industry, I have made a mark as both an actress and a model. With a passion for storytelling and a flair for the dramatic, I've graced the screens in various movies and TV series. Some of my notable credits include roles in popular productions such as "The Johnsons," "Covenant," and "The New Superstory," showcasing my ability to captivate audiences with my performances.</p>
        <p>As an actress, I bring characters to life with depth and authenticity, immersing myself in the narrative to deliver compelling performances. Simultaneously, my work as a model allows me to express creativity through visual storytelling, embodying diverse roles and styles in the world of fashion and imagery.</p>
        <p>I am dedicated to continuously honing my craft and contributing to the vibrant landscape of Nigerian entertainment. With a unique blend of academic knowledge and artistic talent, I aspire to make meaningful contributions to both the scientific and creative realms, leaving an indelible mark on the hearts and minds of those who experience my work.</p>
        `,
          image: "assets/img/panelist/Nunnsi.jpg",
        },
        {
          id: "13",
          title: "Ms",
          firstname: "Laura",
          lastname: "Piñán González",
          position: "International Project Coordinator",
          org: "Naktuinbouw",
          bio: `
        <p>Laura Piñán González is an agricultural engineer specializing in Horticulture and Gardening. She obtained her degree from the School of Agricultural Engineering at the University of Valladolid, Spain.</p>       
        <p>In 1999, she moved to the Netherlands, where she had the opportunity to work on the selection of new rose varieties for a prominent Dutch/French company</p>
        <p>Since 2007, she has played a crucial role in the Horticultural Species Inspection Service of the Netherlands, Naktuinbouw. Her work has focused on being a DUS examiner, with a focus on horticultural crops. Currently, she also takes on the role of coordinator for international projects related to Plant Breeder's Rights and market access.</p>
        <p>Throughout her experience in this role, she has had the valuable opportunity to visit countries on all five continents, participating in conferences, seminars, and training sessions with the purpose of raising awareness and providing training in the creation, development, implementation, and improvement of Breeder's Rights systems. Additionally, she has been actively involved in coordinating and facilitating the training course on "Plant Breeder's Rights for Food Security and Economic Development" since 2010.</p>
        `,
          image: "assets/img/panelist/laura.jpg",
        },
        {
          id: "14",
          title: "Mr",
          firstname: "Kolade",
          lastname: "Dada",
          position: "Managing Director",
          org: "SeedCo Nigeria",
          bio: `
        <p>Kolade Dada, an adept marketing strategy and sales force management professional, boasts a rich 13-year track record in the Agric Input and FMCG sector in Nigeria. Currently steering Seed Co Nigeria as Managing Director, he champions a progressive hybridization agenda for key crops of national interest enhancing farmers' yields and livelihoods.</p>       
        <p>His expertise spans senior leadership roles at Saro Africa International, where he ascended from Business Manager to spearheading Marketing Strategies and optimizing Sales Force Efficiency. He holds a bachelor's degree in Agronomy and Pedology and is an alumnus of the prestigious Lagos Business School.</p>       
        `,
          image: "assets/img/panelist/kolade.jpg",
        },
        {
          id: "15",
          title: "Dr",
          firstname: "Godwin",
          lastname: "Atser",
          position: "Country Director",
          org: "Sasakawa Africa Association",
          bio: `
        <p>Dr. Godwin Atser serves as the Country Director for Sasakawa Africa Association, bringing a wealth of expertise in agricultural extension and rural development. Holding a Ph.D. and M.Sc. in Agricultural Extension & Rural Development from the esteemed University of Ibadan, along with a B.Sc. in Agricultural Economics & Extension from the University of Agriculture Makurdi, Dr. Atser has a solid academic foundation.</p>       
        <p>Before assuming his current role, Dr. Atser made significant contributions at the International Institute of Tropical Agriculture (IITA). He played pivotal roles in various projects funded by notable organizations such as the African Development Bank (AfDB), International Fund for Agricultural Development (IFAD), World Food Program (WFP), and the Bill & Melinda Gates Foundation. Notably, he served as the Project Manager for the GIZ/GIAE Cassava & Maize Value Chain Project and held the position of Advocacy, Promotion & Outreach Lead for the Building an Economically Sustainable, Integrated Cassava Seed System, Phase 2 (BASICS-II) at IITA.</p>       
        <p>Dr. Atser's expertise extends to digital extension and advisory services, where he served as the Digital Extension & Advisory Services Specialist for the African Cassava Agronomy Initiative (ACAI) project. Additionally, he contributed as the Communication & Knowledge Exchange Expert with the Cassava Weed Management Project (CWMP) at IITA.</p>
        <p>His diverse skill set includes proficiency in digital extension, proposal development, advocacy, training, development communications, knowledge management, resource mobilization, marketing, and public affairs. Dr. Atser's multifaceted background makes him a valuable leader in the agricultural sector, and his commitment to advancing sustainable practices is evident through his impactful contributions to various projects and initiatives.</p>
        `,
          image: "assets/img/panelist/godwin.jpg",
        },
      ];

      var filteredItems = $scope.panelistList.filter(function (item) {
        return item.id === itemId;
      });

      // If an item is found, assign it to the scope variable
      $scope.profile = filteredItems.length > 0 ? filteredItems[0] : null;
    }

    $scope.trustAsHtml = function (html) {
      return $sce.trustAsHtml(html);
    };
  },
]);
