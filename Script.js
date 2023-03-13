const options = {
    method: 'POST',
    headers: {
        'X-RapidAPI-Key': 'YOUR API KEY',
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
    }
};

const getSigns = (sign) => {
    signsname.innerHTML = sign;


    // convert Hindi sign name to English
    const signsMap = {
        'Mesh': 'Aries',
        'Vrushabh': 'Taurus',
        'Mithun': 'Gemini',
        'Kark': 'Cancer',
        'Sinh': 'Leo',
        'Kanya': 'Virgo',
        'Tula': 'Libra',
        'Vrushchik': 'Scorpio',
        'Dhanu': 'Sagittarius',
        'Makar': 'Capricorn',
        'Kumbha': 'Aquarius',
        'Meen': 'Pisces'
    };

    const englishSign = signsMap[sign] || sign;

    fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${englishSign}&day=today`, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);

            color.innerHTML = response.color;
            compatibility.innerHTML = response.compatibility;
            current_date.innerHTML = response.current_date;
            date_range.innerHTML = response.date_range;
            description.innerHTML = response.description;
            lucky_number.innerHTML = response.lucky_number;
            lucky_time.innerHTML = response.lucky_time;
            mood.innerHTML = response.mood;

        })
        .catch(err => console.error(err));
};

document.getElementById("sign").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        getSigns(e.target.value);
    }
});


getSigns("Mesh");







