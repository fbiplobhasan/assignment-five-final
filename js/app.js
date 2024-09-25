let accountBalance = 5000;

// Toggle between Donation and History sections
document.getElementById('donationBtn').addEventListener('click', () => {
    document.getElementById('donationSection').classList.remove('hidden');
    document.getElementById('historySection').classList.add('hidden');
    toggleActiveButton('donationBtn', 'historyBtn');
});

document.getElementById('historyBtn').addEventListener('click', () => {
    document.getElementById('donationSection').classList.add('hidden');
    document.getElementById('historySection').classList.remove('hidden');
    toggleActiveButton('historyBtn', 'donationBtn');
});

// Toggle active button style
function toggleActiveButton(activeId, inactiveId) {
    document.getElementById(activeId).classList.add('bg-blue-500');
    document.getElementById(inactiveId).classList.remove('bg-blue-500');
    document.getElementById(inactiveId).classList.add('bg-gray-700');
    document.getElementById(activeId).classList.remove('bg-gray-700');
}

// Handle donations
function donate(cardId) {
    const donationInput = document.getElementById(`donationAmount${cardId}`);
    const donationAmount = parseFloat(donationInput.value);
    const currentDonation = document.getElementById(`currentDonation${cardId}`);

    let donationName = "";
    if (cardId === 1) {
        donationName = "Flood Relief for Noakhali";
    } else if (cardId === 2) {
        donationName = "Flood Relief for Feni";
    } else if (cardId === 3) {
        donationName = "Aid for Injured in Quota Movement";
    }

    if (validateDonation(donationAmount)) {
        accountBalance -= donationAmount;
        document.getElementById('balance').innerHTML = `Balance: <img src="./assets/coin.png" alt="coin" class="w-5 h-5 mx-2"> $${accountBalance}`;

        const newDonationAmount = parseFloat(currentDonation.textContent.substring(1)) + donationAmount;
        currentDonation.textContent = `$${newDonationAmount}`;

        const historyLog = document.getElementById('historyLog');
        const currentTime = new Date().toLocaleString();
        historyLog.innerHTML += `<p>Donated $${donationAmount} to ${donationName} on ${currentTime}</p>`;

        document.getElementById('successModal').classList.remove('hidden');
    }
}

// Close success modal
function closeModal() {
    document.getElementById('successModal').classList.add('hidden');
}

// Validate donation amount
function validateDonation(donationAmount) {
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert('Please enter a valid donation amount.');
        return false;
    }

    if (donationAmount > accountBalance) {
        alert('You do not have enough balance.');
        return false;
    }

    return true;
}

// Toggle between Blog and Home
document.getElementById('toggleButton').addEventListener('click', function () {
    const button = document.getElementById('toggleButton');
    const content = document.getElementById('content');

    if (button.innerText === 'Blog') {
        button.innerText = 'Home';
        window.location.href = './index.html';
    } else {
        button.innerText = 'Blog';
        window.location.href = './blog.html';
    }
});