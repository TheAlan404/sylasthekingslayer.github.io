<script setup>
import { ref, onMounted, computed } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()

const quotesList = [
  "Zulme karşı mukavemet!",
  "Hak, hukuk, adalet!",
  "Cehalet, ayrıcalıklı sınıfın ustaca kullandığı bir silahtır."
]

const imagesList = [
  "/images/1.jpg", "/images/2.jpg", "/images/3.png", "/images/4.jpg", "/images/5.jpg", 
  "/images/6.jpg", "/images/7.jpg", "/images/8.jpg", "/images/9.jpg", "/images/10.jpg", 
  "/images/11.jpg", "/images/12.jpg", "/images/13.jpg", "/images/14.jpg"
]

const currentQuote = ref(quotesList[0])
const currentImage = ref(imagesList[0])

const changeQuoteAndImage = () => {
  const randomQuoteIndex = Math.floor(Math.random() * quotesList.length)
  const randomImageIndex = Math.floor(Math.random() * imagesList.length)
  
  currentQuote.value = quotesList[randomQuoteIndex]
  currentImage.value = imagesList[randomImageIndex]
}

onMounted(() => {
  changeQuoteAndImage()
  setInterval(changeQuoteAndImage, 10000)
})

// Metin rengi karanlık/aydınlık moda göre değişir
const textColor = computed(() => {
  return isDark.value ? 'white' : 'var(--vp-c-text-1)'
})

// Metin gölgesi karanlık/aydınlık moda göre değişir
const textShadow = computed(() => {
  return isDark.value 
    ? '1px 1px 3px rgba(0, 0, 0, 0.3)' 
    : '1px 1px 3px rgba(0, 0, 0, 0.1)'
})
</script>

<template>
  <div class="random-content">
    <div class="quote-container">
      <div class="quote-text-container">
        <h1 class="quote-text">{{ currentQuote }}</h1>
      </div>
      <div class="quote-image">
        <img :src="currentImage" alt="Alıntı görseli">
      </div>
    </div>
  </div>
</template>

<style scoped>
.random-content {
  margin: 0;
  padding: 1rem 0 0;
  width: 100%;
}

.quote-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1080px;
  margin: 0 auto;
  gap: 2rem;
  padding: 0 1rem;
}

.quote-text-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.quote-text {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.quote-image {
  flex: 1;
  max-width: 450px;
  height: 500px; /* Sabit yükseklik */
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transform: perspective(1000px) rotateY(-5deg);
  transition: transform 0.5s ease;
}

.quote-image:hover {
  transform: perspective(1000px) rotateY(0deg);
}

.quote-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Resmi kırpmadan boyutlandır */
  transition: transform 0.4s ease;
}

.quote-image img:hover {
  transform: scale(1.03);
}

.change-button {
  padding: 0.6rem 1.5rem;
  background-color: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.change-button:hover {
  background-color: var(--vp-c-brand-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.change-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Mobil cihazlar için düzenleme */
@media (max-width: 768px) {
  .quote-container {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .quote-text-container {
    width: 100%;
    align-items: center;
  }
  
  .quote-text {
    font-size: 2rem;
    text-align: center;
  }
  
  .quote-image {
    width: 100%;
    max-width: 100%;
    height: 250px; /* Mobil için biraz daha küçük */
    transform: none;
  }
}
</style>
