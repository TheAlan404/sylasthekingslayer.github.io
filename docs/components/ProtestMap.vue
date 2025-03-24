<template>
  <div class="map-container">
    <div id="protest-map" style="height: 500px; width: 100%; border-radius: 8px;"></div>
    <div class="map-legend">
      <div class="map-legend-item ongoing">Ongoing protests</div>
      <div class="map-legend-item planned">Planned protests</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      protests: [
        {
          id: 1,
          name: "Freedom Square Demonstration",
          location: [41.0082, 28.9784], // Istanbul coordinates
          status: "ongoing",
          date: "2025-03-23",
          details: "Large scale peaceful demonstration for civil liberties.",
          time: "14:00 - 18:00"
        },
        {
          id: 2,
          name: "Workers' Rights Rally",
          location: [39.9334, 32.8597], // Ankara coordinates
          status: "ongoing",
          date: "2025-03-23",
          details: "Labor union organized demonstration.",
          time: "12:00 - 16:00"
        },
        {
          id: 3,
          name: "Student March",
          location: [38.4237, 27.1428], // Izmir coordinates
          status: "planned",
          date: "2025-03-25",
          details: "University students protesting education policy changes.",
          time: "15:00 - 17:00"
        },
        {
          id: 4,
          name: "Environmental Protection Rally",
          location: [37.0000, 35.3213], // Adana coordinates
          status: "planned",
          date: "2025-03-26",
          details: "Demonstration against industrial pollution.",
          time: "13:00 - 17:00"
        }
      ]
    };
  },
  mounted() {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      this.loadLeaflet();
    }
  },
  methods: {
    loadLeaflet() {
      // Add the CSS if not already added
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css';
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
        document.head.appendChild(link);
      }

      // Create a script element to load Leaflet
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
      script.onload = () => {
        // After Leaflet is loaded, initialize the map
        this.initMap(window.L);
      };
      script.onerror = (err) => {
        console.error('Error loading Leaflet script:', err);
      };
      document.head.appendChild(script);
    },
    initMap(L) {
      // Check if map element exists and L is defined
      if (!document.getElementById('protest-map') || !L) {
        console.error('Map element or Leaflet not available');
        return;
      }
      
      // Initialize the map centered on Turkey
      this.map = L.map('protest-map').setView([39.0, 35.0], 6);

      // Add OSM tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      // Define custom icons for ongoing and planned protests
      const ongoingIcon = L.divIcon({
        className: 'custom-div-icon',
        html: "<div style='background-color:#c00; width:12px; height:12px; border-radius:50%; border:2px solid white;'></div>",
        iconSize: [16, 16],
        iconAnchor: [8, 8]
      });

      const plannedIcon = L.divIcon({
        className: 'custom-div-icon',
        html: "<div style='background-color:#F4D03F; width:12px; height:12px; border-radius:50%; border:2px solid white;'></div>",
        iconSize: [16, 16],
        iconAnchor: [8, 8]
      });

      // Add markers for each protest
      this.protests.forEach(protest => {
        const icon = protest.status === 'ongoing' ? ongoingIcon : plannedIcon;
        
        const marker = L.marker(protest.location, { icon: icon }).addTo(this.map);
        
        // Create popup content
        const popupContent = `
          <div class="protest-popup">
            <h3>${protest.name}</h3>
            <p><strong>Status:</strong> ${protest.status === 'ongoing' ? 'Ongoing' : 'Planned'}</p>
            <p><strong>Date:</strong> ${protest.date}</p>
            <p><strong>Time:</strong> ${protest.time}</p>
            <p>${protest.details}</p>
          </div>
        `;
        
        marker.bindPopup(popupContent);
      });
    }
  }
};
</script>

<style>
.map-container {
  margin-bottom: 2rem;
}

.map-legend {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.map-legend-item {
  display: inline-flex;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 10px;
}

.map-legend-item:before {
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
  border: 2px solid white;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.2);
}

.map-legend-item.ongoing:before {
  background-color: #c00;
}

.map-legend-item.planned:before {
  background-color: #F4D03F;
}

/* Map popup styling */
.protest-popup h3 {
  margin: 0 0 10px 0;
  color: #e63946;
  font-size: 16px;
}

.protest-popup p {
  margin: 5px 0;
  font-size: 14px;
}
</style>