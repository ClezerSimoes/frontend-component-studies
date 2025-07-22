const   body = document.querySelector("body"),
        nav = document.querySelector("nav"),
        modeToggle = document.querySelector(".dark-light"),
        searchToggle = document.querySelector(".search-toggle"),
        sidebarClose = document.querySelector(".sidebar-close"),
        sidebarOpen = document.querySelector(".sidebar-open");

        let getMode = localStorage.getItem("mode")
            if (getMode && getMode==="dark-mode") {
                body.classList.add("dark")
            }
        

        // Toggle to dark or light mode 
        modeToggle.addEventListener("click", ()=>{
            modeToggle.classList.toggle("active");
            body.classList.toggle("dark");

            if (!body.classList.contains("dark")){
                localStorage.setItem("mode", "light-mode")
            }else{
                localStorage.setItem("mode", "dark-mode")
            }
        });

        // Toggle to search box
        searchToggle.addEventListener("click", ()=>{
            searchToggle.classList.toggle("active");
        });

        // Toggle sidebar
        sidebarOpen.addEventListener("click", ()=>{
            nav.classList.toggle("active")
        });

        body.addEventListener("click", (e)=>{
            let clickedElement = e.target;

            if(!clickedElement.classList.contains("sidebar-open") && !clickedElement.classList.contains("menu"))
                nav.classList.remove("active")
        });