document.getElementById('forgiveButton').addEventListener('click', () => {
            const content = document.getElementById('content');
            const thankYou = document.getElementById('thankYou');
            content.classList.add('hidden');
            thankYou.classList.remove('hidden');
        });