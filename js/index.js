document.getElementById('menuButton').addEventListener('click', function() {
    var targetDiv = document.getElementById('menu-section');
    var spans = this.querySelectorAll('.span-mother span, .span-mother2 span');
    var span2 = this.querySelectorAll('.span-mother2 span');
    
    targetDiv.classList.toggle('active');
    
    if (targetDiv.classList.contains('active')) {
        spans.forEach(function(span) {
            spans[0].textContent = 'c';
            spans[1].textContent = 'l';
            spans[2].textContent = 'o';
            spans[3].textContent = 's';
            spans[4].textContent = 'e';

            span2[0].textContent = 'c';
            span2[1].textContent = 'l';
            span2[2].textContent = 'o';
            span2[3].textContent = 's';
            span2[4].textContent = 'e';
        });
    } else {
        spans[0].textContent = 'm';
        spans[1].textContent = 'e';
        spans[2].textContent = 'n';
        spans[3].textContent = 'u';
        spans[4].textContent = '';
        
        span2[0].textContent = 'm';
        span2[1].textContent = 'e';
        span2[2].textContent = 'n';
        span2[3].textContent = 'u';
        span2[4].textContent = '';
    }
});