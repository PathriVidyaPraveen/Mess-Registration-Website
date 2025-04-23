document.addEventListener("DOMContentLoaded", function () {
    const daySelect = document.getElementById("daySelect");
    const menuDisplay = document.getElementById("menuDisplay");

    const menus = {
        Sunday: {
            breakfast: "Masala Dosa, Chutney, Sambar",
            lunch: "Chicken/Paneer Dum Biryani, Raita",
            dinner: "Veg Korma, Roti, Rasam"
        },
        Monday: {
            breakfast: "Idli, Sambar, Onion Chutney",
            lunch: "Dal Tadka, Bhindi Fry, Rice",
            dinner: "Dal Makhani, Veg Jaipuri, Rasam"
        },
        Tuesday: {
            breakfast: "Uthappam / Kal dosa, Chutney, Sambar",
            lunch: "Rajma, Corn Palak, Rice",
            dinner: "Veg Manchurian, Lobia Masala, Rasam"
        },
        Wednesday: {
            breakfast: "Pongal + Vada / Punugulu",
            lunch: "Dal Makhani, Lauki Kofta, Papaya",
            dinner: "Palak Paneer / Egg Curry, Tomato Rasam"
        },
        Thursday: {
            breakfast: "Paratha / Methi Thepla, Jeera Aloo",
            lunch: "Drumstick Sambar, Sev Masala",
            dinner: "Rajma, Veg Kofta, Pappu Charu"
        },
        Friday: {
            breakfast: "Poha / Upma, Aloo Bonda",
            lunch: "Dal Tadka, Veg Jalfrezi",
            dinner: "Paneer Kolhapuri / Egg Fry, Ginger Rasam"
        },
        Saturday: {
            breakfast: "Masala Dosa, Mixed Veg Sambar",
            lunch: "Moong Dal, Kerala Olan",
            dinner: "Pindi Chole, Palak Puri, Rasgulla"
        }
    };

    function updateMenu(day) {
        const menu = menus[day];
        if (menu) {
            menuDisplay.innerHTML = `
                <h3>${day} Menu</h3>
                <p><strong>Breakfast:</strong> ${menu.breakfast}</p>
                <p><strong>Lunch:</strong> ${menu.lunch}</p>
                <p><strong>Dinner:</strong> ${menu.dinner}</p>
            `;
        } else {
            menuDisplay.innerHTML = `<p>No menu available.</p>`;
        }
    }

    // Default: today’s menu
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    daySelect.value = today;
    updateMenu(today);

    // On change
    daySelect.addEventListener("change", () => {
        updateMenu(daySelect.value);
    });

    const userType = localStorage.getItem("userType");
    const backLink = document.getElementById("backLink");

   
        backLink.href = "../html/admin_dashboard.html";
   

});