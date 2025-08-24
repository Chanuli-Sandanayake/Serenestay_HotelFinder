// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyC8GJxFT0c9NVhz69KSfNVcytOEHiQuXZk",
  authDomain: "serenestay-6569e.firebaseapp.com",
  databaseURL: "https://serenestay-6569e-default-rtdb.firebaseio.com",
  projectId: "serenestay-6569e",
  storageBucket: "serenestay-6569e.appspot.com",
  messagingSenderId: "846855257072",
  appId: "1:846855257072:web:62dae7fc7b3bc077abbb35"
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ✅ DOM Elements
const searchBox = document.getElementById("searchBox");
const typeSelect = document.getElementById("typeSelect");
const hotelList = document.getElementById("hotelList");
const searchBtn = document.getElementById("searchBtn");

// ✅ Add Event Listener
searchBtn.addEventListener("click", filterHotels);

// ✅ Filtering Function
function filterHotels() {
  const queryLocation = searchBox.value.toLowerCase();
  const selectedType = typeSelect.value.toLowerCase();

  const staysRef = db.ref("places"); // ✅ FIXED: from "stays" to "places"
  staysRef.once("value", (snapshot) => {
    hotelList.innerHTML = ""; // Clear previous results

    snapshot.forEach((childSnapshot) => {
      const stay = childSnapshot.val();

      const matchesLocation =
        queryLocation === "" || stay.location.toLowerCase().includes(queryLocation);
      const matchesType =
        selectedType === "" || stay.type.toLowerCase() === selectedType;

      if (matchesLocation && matchesType) {
        const card = `
          <div class="stay-card">
            <img src="${stay.image}" alt="${stay.name}" class="stay-image">
            <div class="stay-info">
              <h3>${stay.name}</h3>
              <p><strong>Location:</strong> ${stay.location}</p>
              <p><strong>Type:</strong> ${stay.type}</p>
              <p><a href="${stay.officialsite}" target="_blank">Official Site</a></p>
            </div>
          </div>
        `;
        hotelList.innerHTML += card;
      }
    });
  });
}
