const categories = [
    {
      name: "BODY SIZE",
      questions: [
        {
          question: "When you observe your overall physique, which of the following descriptions best fits your body size?",
          options: [
            { text: "Slim: Your body tends to be lean with minimal body fat and a narrow frame.", dosha: "Vata" },
            { text: "Medium: Your body appears balanced with an average amount of muscle and body fat.", dosha: "Pitta" },
            { text: "Large: Your body tends to have a sturdy or broad build with significant muscle mass or body fat.", dosha: "Kapha" }
          ]
        },
        // Add more questions for this category if needed
      ]
    },
    {
      name: "BODY WEIGHT",
      questions: [
        {
          question: "When considering your body weight, which description below most closely matches your usual state?",
          options: [
            { text: "Low: You typically have a lower body weight, with less fat and muscle mass.", dosha: "Vata" },
            { text: "Medium: Your body weight falls within an average range relative to your height and build.", dosha: "Pitta" },
            { text: "Overweight: You tend to carry excess weight, either in the form of body fat or muscle mass.", dosha: "Kapha" }
          ]
        },
        // Add more questions for this category if needed
      ]
    },
    {
      name: "CHEEKS",
      questions: [
        {
          question: "When examining your cheeks, which description below best describes their appearance?",
          options: [
            { text: "Wrinkled/Sunken: Your cheeks often appear wrinkled or sunken, lacking fullness.", dosha: "Vata" },
            { text: "Smooth/Flat: Your cheeks typically have a smooth and flat contour without pronounced wrinkles or sunken appearance.", dosha: "Pitta" },
            { text: "Rounded/Plump: Your cheeks have a rounded and plump appearance with fullness.", dosha: "Kapha" }
          ]
        },
        // Add more questions for this category if needed
      ]
    },
    // Add more categories here...
    {
      name: "FACE SHAPE/CHIN",
      questions: [
        {
          question: "When assessing your face shape and chin, which of the following descriptions best matches your features?",
          options: [
            { text: "Thin/Angular: Your face shape is thin and angular, and your chin may be sharply defined or tapered.", dosha: "Vata" },
            { text: "Tapering/Triangular: Your face shape tends to taper towards the chin, giving it a triangular appearance.", dosha: "Pitta" },
            { text: "Rounded/Double Chin: Your face has a rounded shape, and you may have a double chin or fuller chin area.", dosha: "Kapha" }
          ]
        },
        // Add more questions for this category if needed
      ]
    },
  
    {
      name: "EYES",
      questions: [
        {
          question: "When examining your eyes, which of the following descriptions best matches their appearance and characteristics?",
          options: [
            { text: "Small/Sunken/Dry: Your eyes are small, sunken, and often appear dry. They may have a nervous quality.", dosha: "Vata" },
            { text: "Sharp/Bright/Sensitive to Light: Your eyes are sharp, bright, and may be sensitive to light. They may have colors like gray, green, or yellow/red.", dosha: "Pitta" },
            { text: "Big/Beautiful/Calm: Your eyes are large, beautiful, and often appear calm. They may have a blue coloration.", dosha: "Kapha" }
          ]
        },
        // Add more questions for this category if needed
      ]
    },
  
    {
      name: "NOSE",
      questions: [
        {
          question: "When observing your nose, which description below best matches its appearance?",
          options: [
            { text: "Uneven/Deviated Septum: Your nose appears uneven, and you may have a deviated septum.", dosha: "Vata" },
            { text: "Long Pointed/Red Nose-Tip: Your nose is long and pointed, with a red tip.", dosha: "Pitta" },
            { text: "Short Rounded/Button Nose: Your nose is short, rounded, and has a button-like appearance. ", dosha: "Kapha" }
          ]
        },
        // Add more questions for this category if needed
      ]
    },
    {
      name: "LIPS",
      questions: [
        {
          question: "When you wake up in the morning, how do your lips usually feel?",
          options: [
            { text: "Dry and possibly cracked, requiring immediate application of lip balm.", dosha: "Vata" },
            { text: "Slightly swollen or inflamed, particularly if you have allergies or sensitivities.", dosha: "Pitta" },
            { text: "Moisturized and comfortable, with no immediate need for lip care. ", dosha: "Kapha" }
          ]
        },
        // Add more questions for this category if needed
      ]
    },
  
    {
      name: "TEETH",
      questions: [
        {
          question: "When I smile, my gums appear:",
          options: [
            { text: "Prominent and sticking out", dosha: "Vata" },
            { text: "Generally soft and medium in size", dosha: "Pitta" },
            { text: "Healthy, white, and not too noticeable", dosha: "Kapha" }
          ]
        },
        // Add more questions for this category if needed
      ]
    },
  
    {
      name: "SKIN",
      questions: [
        {
          question: "My skin is:",
          options: [
            { text: "dry,rough and thin", dosha: "Vata" },
            { text: "oily and sensitive", dosha: "Pitta" },
            { text: "smooth, slightly oily and thick", dosha: "Kapha" }
          ]
        },
        // Add more questions for this category if needed
      ]
    },
  
    {
      name: "HAIR",
      questions: [
        {
          question: "How would you describe the texture of your hair?",
          options: [
            { text: "Dry, brittle, and prone to knots.", dosha: "Vata" },
            { text: "Straight or slightly wavy, and tends to be oily.", dosha: "Pitta" },
            { text: "Thick, curly, or wavy with a healthy shine.", dosha: "Kapha" }
          ]
        },
        // Add more questions for this category if needed
      ]
    },
  
    {
      name: "APPETITE",
      questions: [
        {
          question: "Recently, I have been:",
          options: [
            { text: "cranky or irritable if I go too long without eating.", dosha: "Vata" },
            { text: "reaching for food in an effort to soothe my emotions, even when I am not physically hungry", dosha: "Pitta" },
            { text: "forgetting to eat, but I usually suffer for it; common symptoms include low energy, spaciness, or lack of focus.", dosha: "Kapha" }
          ]
        },
        // Add more questions for this category if needed
      ]
    },
  
    {
      name: "DIGESTION",
      questions: [
        {
          question: "Lately, I have noticed one or more of the following symptoms in my digestive tract:",
          options: [
            { text: "gas or bloating.", dosha: "Vata" },
            { text: "acidity, burning sensations, excess heat, or tightness in my belly.", dosha: "Pitta" },
            { text: "slow, sluggish digestion accompanied by a sense of heaviness or fullness.", dosha: "Kapha" }
          ]
        },
        // Add more questions for this category if needed
      ]
    },
  ];
  
  const categoryTitle = document.getElementById('categoryTitle');
  const questionText = document.getElementById('questionText');
  const optionsContainer = document.getElementById('optionsContainer');
  const nextBtn = document.getElementById('nextBtn');
  const closeBtn = document.getElementById('closeBtn');
  
  let currentCategoryIndex = 0;
  let currentQuestionIndex = 0;
  let doshaScores = {
    Vata: 0,
    Pitta: 0,
    Kapha: 0
  };
  
  function loadCategory(index) {
    const currentCategory = categories[index];
    categoryTitle.textContent = `Category: ${currentCategory.name}`;
    loadQuestion(0); // Load first question of the category
  }
  
  function loadQuestion(index) {
    const currentQuestion = categories[currentCategoryIndex].questions[index];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, idx) => {
      const optionDiv = document.createElement('div');
      optionDiv.textContent = String.fromCharCode(65 + idx) + '. ' + option.text;
      optionDiv.classList.add('option');
      optionDiv.dataset.dosha = option.dosha;
      optionDiv.addEventListener('click', () => {
        optionsContainer.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        optionDiv.classList.add('selected');
        nextBtn.removeAttribute('disabled');
      });
      optionsContainer.appendChild(optionDiv);
    });
  }
  
  function calculatePredominantDosha(scores) {
    let predominantDosha = '';
    let maxScore = 0;
    for (const dosha in scores) {
      if (scores[dosha] > maxScore) {
        maxScore = scores[dosha];
        predominantDosha = dosha;
      }
    }
    return predominantDosha;
  }
  
  
  function createCard(title, imageUrl, buttonText, buttonLink, cardText) {
    const cardItem = document.createElement('li');
    cardItem.classList.add('cards_item');
  
    const card = document.createElement('div');
    card.classList.add('card');
  
    const cardImage = document.createElement('div');
    cardImage.classList.add('card_image');
    const image = document.createElement('img');
    image.src = imageUrl;
    cardImage.appendChild(image);
  
    const cardContent = document.createElement('div');
    cardContent.classList.add('card_content');
  
    const cardTitle = document.createElement('h2');
    cardTitle.classList.add('card_title');
    cardTitle.textContent = title;
  
    const cardTextElement = document.createElement('p');
    cardTextElement.classList.add('card_text');
    cardTextElement.textContent = cardText;
  
    const cardBtn = document.createElement('button');
    cardBtn.classList.add('btn', 'card_btn');
    cardBtn.textContent = buttonText;
    cardBtn.addEventListener('click', () => {
      window.location.href = buttonLink;
    });
  
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardTextElement);
    cardContent.appendChild(cardBtn);
  
    card.appendChild(cardImage);
    card.appendChild(cardContent);
  
    cardItem.appendChild(card);
  
    return cardItem;
  }
  
  function showResult() {
    const predominantDosha = calculatePredominantDosha(doshaScores);
    document.getElementById('categoryContainer').style.display = 'none';
    const container = document.querySelector('.container');
    container.innerHTML = `<p style="font-size: 2em; font-weight: bold; text-align: center;">Your predominant dosha is: ${predominantDosha}</p>`; // Display the predominant dosha message with specified styling
    container.style.color = 'blue'; // Optionally, change text color
  
    // Create cards based on predominant dosha
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cards-container');
    if (predominantDosha === 'Vata') {
      const card1 = createCard('Vata Balancing: Practical Tips & Tools for a Balanced Life', './Images/vatta2.jpg', 'Read More', 'https://balancing-vatta.netlify.app/', 'Eating a grounding and nourishing vata diet is one of the best ways to cultivate greater balance in your body and mind.');
      const card2 = createCard('Vata-Balancing Diet', './Images/vatta.png', 'Read More', 'https://vatta-balancing-diet.netlify.app', 'Vata is balanced by a diet of freshly cooked, whole foods that are soft or mushy in texture, rich in protein and fat, seasoned with a variety of warming spices, and served warm or hot.');
      const card3 = createCard('Vata-Balancing Foods', './Images/vatta4.png', 'Read More', 'https://vatta-balancing-foods.netlify.app', 'Vata is cool, dry, rough and light, so eating foods that neutralize these qualities—foods that are warm, moist, oily, smooth, and nourishing—can help to balance excess vata.');
      cardsContainer.appendChild(card1);
      cardsContainer.appendChild(card2);
      cardsContainer.appendChild(card3);
    } else if (predominantDosha === 'Pitta') {
      const card1 = createCard('Pitta Balancing Foods', './Images/pittagen1.jpg', 'Read More', 'https://balancing-pitta.netlify.app', 'Ayurveda has a long history detailing the use of herbs and herbal combinations to cool the heat of pitta and support balance in the body and mind. ');
      const card2 = createCard('Pitta Balancing Diet', './Images/pitta1.png', 'Read More', 'https://pitta-balancing-diet.netlify.app', 'Pitta is balanced by a diet of fresh, whole foods (both cooked and raw) that are cooling, hearty, energizing, comparatively dry, and high in carbohydrates.');
      const card3 = createCard('Pitta-Balancing Foods', './Images/Pitta2.png', 'Read More', 'https://pitta-balancing-foods.netlify.app', 'Pitta is oily, sharp, hot, light, spreading, and liquid, so eating foods that neutralize these qualities—foods that are dry, mild, cooling, grounding, stabilizing, and dense—serve to balance excess pitta.');
      cardsContainer.appendChild(card1);
      cardsContainer.appendChild(card2);
      cardsContainer.appendChild(card3);
    } else if (predominantDosha === 'Kapha') {
      const card1 = createCard('Kapha Balancing Foods', './Images/Kapha1.png', 'Read More', 'https://balancing-kapha.netlify.app', 'This dosha governs nourishment, growth, lubrication, stamina, and our ability to feel contentment. In excess, it can cause sluggishness, lack of motivation, heaviness in the mind and body, and excessive sleep.');
      const card2 = createCard('Kapha Balancing Diet', './Images/Kapha2.png', 'Read More', 'https://kapha-balancing-diet.netlify.app', 'Kapha is balanced by a diet of freshly cooked, whole foods that are light, dry, warming, well spiced, and relatively easy to digest—ideally served warm or hot.');
      const card3 = createCard('Another Kapha Balancing Foods', './Images/kapha3.png', 'Read More', 'https://kapha-balancing-foods.netlify.app', 'Kapha is heavy, cool, oily, and smooth, so eating foods that neutralize these qualities—foods that are light, warm, dry, and rough—can help to balance excess kapha.');
      cardsContainer.appendChild(card1);
      cardsContainer.appendChild(card2);
      cardsContainer.appendChild(card3);
    }
  
    container.insertAdjacentElement('afterend', cardsContainer);
  
    // Display the pie chart container
    const pieChartContainer = document.getElementById('pieChartContainer');
    pieChartContainer.style.display = 'block';
  
    // Render the pie chart
    renderPieChart();
  }
  
  function renderPieChart() {
    var chart = new CanvasJS.Chart("chartContainer", {
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: "Dosha Percentage"
      },
      legend: {
        cursor: "pointer",
        itemclick: explodePie
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "{name}: <strong>{y}%</strong>",
        indexLabel: "{name} - {y}%",
        dataPoints: [
          { y: doshaScores['Vata'], name: "Vata", exploded: true },
          { y: doshaScores['Pitta'], name: "Pitta" },
          { y: doshaScores['Kapha'], name: "Kapha" }
        ]
      }]
    });
    chart.render();
  
  }
  
  function explodePie(e) {
    if (typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
      e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
    } else {
      e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
    }
    e.chart.render();
  }
  
  
  
  
  loadCategory(currentCategoryIndex);
  
  nextBtn.addEventListener('click', () => {
    const selectedOption = optionsContainer.querySelector('.option.selected');
    if (selectedOption) {
      doshaScores[selectedOption.dataset.dosha]++;
      selectedOption.classList.remove('selected');
      nextBtn.setAttribute('disabled', true);
      currentQuestionIndex++;
      if (currentQuestionIndex < categories[currentCategoryIndex].questions.length) {
        loadQuestion(currentQuestionIndex);
      } else {
        currentCategoryIndex++;
        currentQuestionIndex = 0;
        if (currentCategoryIndex < categories.length) {
          loadCategory(currentCategoryIndex);
        } else {
          // Handle quiz completion
          showResult();
        }
      }
    } else {
      alert("Please select an option before proceeding to the next question.");
    }
  });
  
  
  
  