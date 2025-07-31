// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "List of projects I&#39;ve worked on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "List of my Publicatoins.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This page summarizes my resume. Contact srisha047@gmail.com for additional details.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-completed-bachelor-of-science-in-agriculture-from-agriculture-and-forestry-university-rampur-nepal",
          title: 'Completed Bachelor of Science in Agriculture from Agriculture and Forestry University, Rampur, Nepal!...',
          description: "",
          section: "News",},{id: "news-published-my-first-research-article-fall-armyworm-menace-to-nepalese-farming-and-the-integrated-management-approaches",
          title: 'Published my first research article! “Fall armyworm: Menace to Nepalese farming and the...',
          description: "",
          section: "News",},{id: "news-published-my-first-research-article-fall-armyworm-menace-to-nepalese-farming-and-the-integrated-management-approaches",
          title: 'Published my first research article! “Fall armyworm: Menace to Nepalese farming and the...',
          description: "",
          section: "News",},{id: "news-tarted-internship-at-prime-minister-agriculture-modernization-project-pmamp",
          title: 'tarted internship at Prime Minister Agriculture Modernization Project (PMAMP)! 🌱',
          description: "",
          section: "News",},{id: "news-joined-central-bureau-of-statistics-nepal-as-a-census-supervisor",
          title: 'Joined Central Bureau of Statistics, Nepal as a Census Supervisor! 📊',
          description: "",
          section: "News",},{id: "news-thrilled-to-share-that-i-have-completed-my-master-of-science-in-entomology-from-agriculture-and-forestry-university-rampur-nepal",
          title: '🎓 Thrilled to share that I have completed my Master of Science in...',
          description: "",
          section: "News",},{id: "news-joined-international-development-enterprise-ide-nepal-as-a-research-assistant",
          title: 'Joined International Development Enterprise (iDE) Nepal as a Research Assistant! 🔬',
          description: "",
          section: "News",},{id: "news-excited-to-start-new-role-as-project-coordinator-at-sahas-nepal",
          title: 'Excited to start new role as Project Coordinator at SAHAS Nepal! 🌱',
          description: "",
          section: "News",},{id: "projects-fall-armyworm-management-research",
          title: 'Fall Armyworm Management Research',
          description: "Published study on sustainable strategies to combat Fall Armyworm in Nepal",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-black-soldier-fly-for-waste-to-feed-innovation",
          title: 'Black Soldier Fly for Waste-to-Feed Innovation',
          description: "Promoting circular economy through organic waste valorization using Black Soldier Fly (BSF)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-botanical-oils-for-pulse-beetle-management",
          title: 'Botanical Oils for Pulse Beetle Management',
          description: "Evaluating plant-based oils as eco-friendly alternatives to synthetic pesticides for managing Callosobruchus chinensis in stored pulses.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-managing-helicoverpa-armigera-in-tomatoes",
          title: 'Managing Helicoverpa armigera in Tomatoes',
          description: "Integrated approaches using trap crops and botanicals to control fruit borer infestation in tomato crops.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
