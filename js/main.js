function positionTooltip(event){
    var tPosX = event.pageX - 160;
    var tPosY = event.pageY - 85;
    $('.data-tooltip').css({'position': 'absolute', 'top': tPosY+'px', 'left': tPosX+'px'});
}; //end positionTooltip

function attachHoverChart(pop,reg,ride,work){  
    
    $('#population-11')
        .mouseenter(function(event) {
            var data = Number(pop[0]['pop']).toLocaleString('en');
            $('body').append('<div class="data-tooltip"><p><b>Population:</b> '+data+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#population-12')
        .mouseenter(function(event) {
            var data = Number(pop[1]['pop']).toLocaleString('en');
            $('body').append('<div class="data-tooltip"><p><b>Population:</b> '+data+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });    
    $('#population-13')
        .mouseenter(function(event) {
            var data = Number(pop[2]['pop']).toLocaleString('en');
            $('body').append('<div class="data-tooltip"><p><b>Population:</b> '+data+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });    
    $('#population-14')
        .mouseenter(function(event) {
            var data = Number(pop[3]['pop']).toLocaleString('en');
            $('body').append('<div class="data-tooltip"><p><b>Population:</b> '+data+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });    
    $('#population-15')
        .mouseenter(function(event) {
            var data = Number(pop[4]['pop']).toLocaleString('en');
            $('body').append('<div class="data-tooltip"><p><b>Population:</b> '+data+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });    
    $('#population-16')
        .mouseenter(function(event) {
            var data = Number(pop[5]['pop']).toLocaleString('en');
            $('body').append('<div class="data-tooltip"><p><b>Population:</b> '+data+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });    
    $('#population-17')
        .mouseenter(function(event) {
            var data = Number(pop[6]['pop']).toLocaleString('en');
            $('body').append('<div class="data-tooltip"><p><b>Population:</b> '+data+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    
    $('#registration-11')
        .mouseenter(function(event) {
            var data = Number(reg[0]['regs']).toLocaleString('en');
            $('body').append('<div class="data-tooltip"><p><b>Auto Registrations:</b> '+data+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#registration-12')
        .mouseenter(function(event) {
            var data = Number(reg[1]['regs']).toLocaleString('en');
            $('body').append('<div class="data-tooltip"><p><b>Auto Registrations:</b> '+data+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });    
    $('#registration-13')
        .mouseenter(function(event) {
            var data = Number(reg[2]['regs']).toLocaleString('en');
            $('body').append('<div class="data-tooltip"><p><b>Auto Registrations:</b> '+data+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });    
    $('#registration-14')
        .mouseenter(function(event) {
            var data = Number(reg[3]['regs']).toLocaleString('en');
            $('body').append('<div class="data-tooltip"><p><b>Auto Registrations:</b> '+data+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });    
    $('#registration-15')
        .mouseenter(function(event) {
            var data = Number(reg[4]['regs']).toLocaleString('en');
            $('body').append('<div class="data-tooltip"><p><b>Auto Registrations:</b> '+data+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });    
    $('#registration-16')
        .mouseenter(function(event) {
            var data = Number(reg[5]['regs']).toLocaleString('en');
            $('body').append('<div class="data-tooltip"><p><b>Auto Registrations:</b> '+data+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });    
    $('#registration-17')
        .mouseenter(function(event) {
            var data = Number(reg[6]['regs']).toLocaleString('en');
            $('body').append('<div class="data-tooltip"><p><b>Auto Registrations:</b> '+data+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    
    $('#ridership-11')
        .mouseenter(function(event) {
            var data = Number(ride[0]['rides']).toLocaleString('en');
            $('body').append('<div class="data-tooltip"><p><b>Bus Riders (million):</b> '+data+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#ridership-12')
        .mouseenter(function(event) {
            var data = Number(ride[1]['rides']).toLocaleString('en');
            $('body').append('<div class="data-tooltip"><p><b>Bus Riders (million):</b> '+data+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });    
    $('#ridership-13')
        .mouseenter(function(event) {
            var data = Number(ride[2]['rides']).toLocaleString('en');
            $('body').append('<div class="data-tooltip"><p><b>Bus Riders (million):</b> '+data+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });    
    $('#ridership-14')
        .mouseenter(function(event) {
            var data = Number(ride[3]['rides']).toLocaleString('en');
            $('body').append('<div class="data-tooltip"><p><b>Bus Riders (million):</b> '+data+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });    
    $('#ridership-15')
        .mouseenter(function(event) {
            var data = Number(ride[4]['rides']).toLocaleString('en');
            $('body').append('<div class="data-tooltip"><p><b>Bus Riders (million):</b> '+data+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });    
    $('#ridership-16')
        .mouseenter(function(event) {
            var data = Number(ride[5]['rides']).toLocaleString('en');
            $('body').append('<div class="data-tooltip"><p><b>Bus Riders (million):</b> '+data+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });    
    $('#ridership-17')
        .mouseenter(function(event) {
            var data = Number(ride[6]['rides']).toLocaleString('en');
            $('body').append('<div class="data-tooltip"><p><b>Bus Riders (million):</b> '+data+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    
    $('#drive-11')
        .mouseenter(function(event) {
            var data = Number(work[0]['drive']).toLocaleString('en');
			var pct = String(work[0]['drivep'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Drivers:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#drive-12')
        .mouseenter(function(event) {
            var data = Number(work[1]['drive']).toLocaleString('en');
			var pct = String(work[1]['drivep'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Drivers:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#drive-13')
        .mouseenter(function(event) {
            var data = Number(work[2]['drive']).toLocaleString('en');
			var pct = String(work[2]['drivep'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Drivers:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#drive-14')
        .mouseenter(function(event) {
            var data = Number(work[3]['drive']).toLocaleString('en');
			var pct = String(work[3]['drivep'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Drivers:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#drive-15')
        .mouseenter(function(event) {
            var data = Number(work[4]['drive']).toLocaleString('en');
			var pct = String(work[4]['drivep'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Drivers:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#drive-16')
        .mouseenter(function(event) {
            var data = Number(work[5]['drive']).toLocaleString('en');
			var pct = String(work[5]['drivep'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Drivers:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#cp-11')
        .mouseenter(function(event) {
            var data = Number(work[0]['cp']).toLocaleString('en');
			var pct = String(work[0]['cpp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Carpoolers:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#cp-12')
        .mouseenter(function(event) {
            var data = Number(work[1]['cp']).toLocaleString('en');
			var pct = String(work[1]['cpp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Carpoolers:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#cp-13')
        .mouseenter(function(event) {
            var data = Number(work[2]['cp']).toLocaleString('en');
			var pct = String(work[2]['cpp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Carpoolers:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#cp-14')
        .mouseenter(function(event) {
            var data = Number(work[3]['cp']).toLocaleString('en');
			var pct = String(work[3]['cpp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Carpoolers:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#cp-15')
        .mouseenter(function(event) {
            var data = Number(work[4]['cp']).toLocaleString('en');
			var pct = String(work[4]['cpp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Carpoolers:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#cp-16')
        .mouseenter(function(event) {
            var data = Number(work[5]['cp']).toLocaleString('en');
			var pct = String(work[5]['cpp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Carpoolers:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    
    $('#public-11')
        .hover(function(event) {
            var data = Number(work[0]['pub']).toLocaleString('en');
			var pct = String(work[0]['pubp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Public Transit:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#public-12')
        .mouseenter(function(event) {
            var data = Number(work[1]['pub']).toLocaleString('en');
			var pct = String(work[1]['pubp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Public Transit:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#public-13')
        .mouseenter(function(event) {
            var data = Number(work[2]['pub']).toLocaleString('en');
			var pct = String(work[2]['pubp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Public Transit:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#public-14')
        .mouseenter(function(event) {
            var data = Number(work[3]['pub']).toLocaleString('en');
			var pct = String(work[3]['pubp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Public Transit:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#public-15')
        .mouseenter(function(event) {
            var data = Number(work[4]['pub']).toLocaleString('en');
			var pct = String(work[4]['pubp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Public Transit:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#public-16')
        .mouseenter(function(event) {
            var data = Number(work[5]['pub']).toLocaleString('en');
			var pct = String(work[5]['pubp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Public Transit:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#walk-11')
        .mouseenter(function(event) {
            var data = Number(work[0]['walk']).toLocaleString('en');
			var pct = String(work[0]['walkp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Walk:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#walk-12')
        .mouseenter(function(event) {
            var data = Number(work[1]['walk']).toLocaleString('en');
			var pct = String(work[1]['walkp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Walk:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#walk-13')
        .mouseenter(function(event) {
            var data = Number(work[2]['walk']).toLocaleString('en');
			var pct = String(work[2]['walkp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Walk:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#walk-14')
        .mouseenter(function(event) {
            var data = Number(work[3]['walk']).toLocaleString('en');
			var pct = String(work[3]['walkp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Walk:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#walk-15')
        .mouseenter(function(event) {
            var data = Number(work[4]['walk']).toLocaleString('en');
			var pct = String(work[4]['walkp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Walk:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#walk-16')
        .mouseenter(function(event) {
            var data = Number(work[5]['walk']).toLocaleString('en');
			var pct = String(work[5]['walkp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Walk:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#other-11')
        .mouseenter(function(event) {
            var data = Number(work[0]['other']).toLocaleString('en');
			var pct = String(work[0]['otherp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Other:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#other-12')
        .mouseenter(function(event) {
            var data = Number(work[1]['other']).toLocaleString('en');
			var pct = String(work[1]['otherp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Other:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#other-13')
        .mouseenter(function(event) {
            var data = Number(work[2]['other']).toLocaleString('en');
			var pct = String(work[2]['otherp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Other:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#other-14')
        .mouseenter(function(event) {
            var data = Number(work[3]['other']).toLocaleString('en');
			var pct = String(work[3]['otherp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Other:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#other-15')
        .mouseenter(function(event) {
            var data = Number(work[4]['other']).toLocaleString('en');
			var pct = String(work[4]['otherp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Other:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#other-16')
        .mouseenter(function(event) {
            var data = Number(work[5]['other']).toLocaleString('en');
			var pct = String(work[5]['otherp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Other:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#home-11')
        .mouseenter(function(event) {
            var data = Number(work[0]['wah']).toLocaleString('en');
			var pct = String(work[0]['wahp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Home:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#home-12')
        .mouseenter(function(event) {
            var data = Number(work[1]['wah']).toLocaleString('en');
			var pct = String(work[1]['wahp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Home:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#home-13')
        .mouseenter(function(event) {
            var data = Number(work[2]['wah']).toLocaleString('en');
			var pct = String(work[2]['wahp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Home:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#home-14')
        .mouseenter(function(event) {
            var data = Number(work[3]['wah']).toLocaleString('en');
			var pct = String(work[3]['wahp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Home:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#home-15')
        .mouseenter(function(event) {
            var data = Number(work[4]['wah']).toLocaleString('en');
			var pct = String(work[4]['wahp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Home:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
    $('#home-16')
        .mouseenter(function(event) {
            var data = Number(work[5]['wah']).toLocaleString('en');
			var pct = String(work[5]['wahp'])+'%';
            $('body').append('<div class="data-tooltip"><p><b>Home:</b> '+data+'<br><b>% of all:</b> '+pct+'</p></div>');
            positionTooltip(event);
        })
        .mouseleave(function(){
            $('.data-tooltip').remove();
        });
}; //end attachHoverChart

function handleStepEnter(response){
    var years = ['11','12','13','14','15','16','17']
    var index = response.index;
    if (index == 1) {
        for (i=0; i< years.length; i++){
            var year = years[i];
            var bar = '#population-'+year
            var label = '#population-b'
            $(bar).css('stroke','#FF6700')
            $(bar).css('stroke-width','3')
            $(label).css('stroke','#FF6700')
            $(label).css('stroke-width','3')
        }
    } else if (index == 2){
        for (i=0; i< years.length; i++){
            var year = years[i];
            var bar = '#registration-'+year
            var label = '#registration-b'
            $(bar).css('stroke','#FF6700')
            $(bar).css('stroke-width','3')
            $(label).css('stroke','#FF6700')
            $(label).css('stroke-width','3')
        }
    } else if (index == 3){
        for (i=0; i< years.length-1; i++){
            var year = years[i];
            var bar = '#traffic-'+year
            var label = '#traffic-b'
            $(bar).css('stroke','#FF6700')
            $(bar).css('stroke-width','3')
            $(label).css('stroke','#FF6700')
            $(label).css('stroke-width','3')
        }
    } else if (index == 4){
        for (i=0; i< years.length; i++){
            var year = years[i];
            var bar = '#ridership-'+year
            var label = '#ridership-b'
            $(bar).css('stroke','#FF6700')
            $(bar).css('stroke-width','3')
            $(label).css('stroke','#FF6700')
            $(label).css('stroke-width','3')
        };
    };
}; //end handleStepEnter

function handleStepExit(response){
    var years = ['11','12','13','14','15','16','17']
    var index = response.index;
    if (index == 1) {
        for (i=0; i< years.length; i++){
            var year = years[i];
            var bar = '#population-'+year
            var label = '#population-b'
            $(bar).css('stroke','#a6cee3')
            $(bar).css('stroke-width','.5')
            $(label).css('stroke','#a6cee3')
            $(label).css('stroke-width','.5')
        }
    } else if (index == 2){
        for (i=0; i< years.length; i++){
            var year = years[i];
            var bar = '#registration-'+year
            var label = '#registration-b'
            $(bar).css('stroke','#1f78b4')
            $(bar).css('stroke-width','.5')
            $(label).css('stroke','#1f78b4')
            $(label).css('stroke-width','.5')
        }
    } else if (index == 3){
        for (i=0; i< years.length-1; i++){
            var year = years[i];
            var bar = '#traffic-'+year
            var label = '#traffic-b'
            $(bar).css('stroke','#b2df8a')
            $(bar).css('stroke-width','.5')
            $(label).css('stroke','#b2df8a')
            $(label).css('stroke-width','.5')
        }
    } else if (index == 4){
        for (i=0; i< years.length; i++){
            var year = years[i];
            var bar = '#ridership-'+year
            var label = '#ridership-b'
            $(bar).css('stroke','#33a02c')
            $(bar).css('stroke-width','.5')
            $(label).css('stroke','#33a02c')
            $(label).css('stroke-width','.5')
        };
    };
}; //end handleStepExit

function handleContainerEnter(direction){
    var graphic = d3.select('.scroll__graphic')
    graphic.classed('is-fixed', true);
    graphic.classed('is-bottom', false);
    var chart = d3.select('#main-chart');
    chart.style('right','8px');
}; //end handleContainerEnter

function handleContainerExit(response){
    var graphic = d3.select('.scroll__graphic')
	graphic.classed('is-fixed', false);
	graphic.classed('is-bottom', response.direction === 'down');
    var chart = d3.select('#main-chart');
    chart.style('right','0px');
}; //end handleContainerExit

function initCharts(){
    //https://pudding.cool/process/introducing-scrollama/
    // instantiate the scrollama
    const scroller = scrollama();

    // setup the instance, pass callback functions
    scroller
      .setup({
        step: '.scroll__text .step', // required
        container: '.scroll', // required (for sticky)
        graphic: '.scroll__graphic', // required (for sticky)
        debug: false
      })
      .onStepEnter(handleStepEnter)
      .onStepExit(handleStepExit)
      .onContainerEnter(handleContainerEnter)
      .onContainerExit(handleContainerExit);

    $('.chart').load('img/main_chart.svg');
    $('#chart-2').load('img/transport_chart.svg');
    $('#chart-3').load('img/fare_chart.svg');
    
    d3.queue()
        .defer(d3.csv, "data/dc_pop.csv") //load attributes from csv
        .defer(d3.csv, "data/dc_car_regi.csv") //load attributes from csv
        .defer(d3.csv, "data/ridership.csv") //load attributes from csv
        .defer(d3.csv, "data/transport_work.csv") //load attributes from csv
        .await(callback);
    
    function callback(error,popCSV,regiCSV,rideCSV,transportCSV){
        
        var popDataDict = [];
        for (var i=0; i < popCSV.length; i++) {
            popDataDict.push({
                year: popCSV[i]["YEAR"],
                pop: popCSV[i]["POP"]
            });
        };
        
        var regDataDict = [];
        for (var i=0; i < regiCSV.length; i++) {
            regDataDict.push({
                year: regiCSV[i]["YEAR"],
                regs: regiCSV[i]["REGS"]
            });
        };
        
        var rideDataDict = [];
        for (var i=0; i < rideCSV.length; i++) {
            rideDataDict.push({
                year: rideCSV[i]["YEAR"],
                rides: rideCSV[i]["RIDE"]
            });
        };
        
        var transportDataDict = [];
        for (var i=0; i < transportCSV.length; i++) {
            transportDataDict.push({
                year: transportCSV[i]["YEAR"],
                drive: transportCSV[i]["DRIVE"],
                cp: transportCSV[i]["CP"],
                pub: transportCSV[i]["PUB"],
                walk: transportCSV[i]["WALK"],
                other: transportCSV[i]["OTHER"],
                wah: transportCSV[i]["WAH"],
                drivep: transportCSV[i]["DRIVE_P"],
                cpp: transportCSV[i]["CP_P"],
                pubp: transportCSV[i]["PUB_P"],
                walkp: transportCSV[i]["WALK_P"],
                otherp: transportCSV[i]["OTHER_P"],
                wahp: transportCSV[i]["WAH_P"]
            });
        };
        attachHoverChart(popDataDict,regDataDict,rideDataDict,transportDataDict);
    };
};//end initCharts

function addBusStops(map) {
    var selectRoute = $('#routes-select').val();
    if (selectRoute == 'none'){
        alert('Please select a route from the list.')
    } else {
        var key = 'cxZZf9-tgRgJseGvWAmC4Q';
        var getURL = 'https://jjfisher2.carto.com/api/v2/sql?format=GeoJSON&q=';
        var sql = "SELECT name, the_geom FROM jjfisher2.dc_bus_stops WHERE stopid in (SELECT stopid FROM jjfisher2.dc_stop_route WHERE route='"+selectRoute+"')&api_key=";

        $.getJSON(getURL+sql+key, function(data){
            var features = data.features;
                
            var busMarkerOptions = {
                radius: 3.5,
                fillColor: "black",
                color: "red",
                weight: .75,
                opacity: 0.8,
                fillOpacity: 0.8
            };

            var busPoints = L.geoJSON(features, {
                pointToLayer: function (feature, latlng) {
                    return L.circleMarker(latlng, busMarkerOptions);
                },
                onEachFeature: busStopName
            }).addTo(map);
            
            map.fitBounds(busPoints.getBounds(), {padding:[25,25]});
            
            $('#add-button').attr("disabled","disabled");
            $('#clear-button').removeAttr("disabled");
            $('#clear-button').click(function(){
                map.removeLayer(busPoints);
                $('#add-button').removeAttr("disabled");
                $('#clear-button').attr("disabled","disabled");
            });
        });
    }
}; //end AddBusStops

//function to instantiate the Leaflet map
function createMap(){
    
    var myBounds = [[38.5, -78],[39.5, -76]];
    
    var map = L.map('mapid', {
        maxZoom: 18,
        minZoom: 10,
        maxBounds: myBounds,
        zoomControl:true
    }).setView([38.89, -77.005], 13);
   
    var streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam1qZmlzaGVyIiwiYSI6ImNqYXVlNDg3cDVhNmoyd21oZ296ZXpwdWMifQ.OGprR1AOquImP-bemM-f2g').addTo(map);

    var imagery = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam1qZmlzaGVyIiwiYSI6ImNqYXVlNDg3cDVhNmoyd21oZ296ZXpwdWMifQ.OGprR1AOquImP-bemM-f2g');
    
    var baseMaps = {
        "Default": streets,
        "Imagery": imagery
    }; 

    //use queue to parallelize asynchronous data loading
    d3.queue()
        .defer(d3.json, "data/blocks.topojson")
        .defer(d3.json, "data/dc.topojson")
        .defer(d3.json, "data/dc_bus_stops.topojson")
        .defer(d3.json, "data/metro_lines.topojson")
        .defer(d3.json, "data/metro_stations.topojson")
        .defer(d3.json, "data/rapid_bus.topojson")
        .defer(d3.json, "data/rapid_bus_trans.topojson")
        .defer(d3.json, "data/traffic_20.topojson")
        .defer(d3.csv, "data/dc_routes.csv")
        .await(callback);
        
    function callback (error,blocksTopo,dcTopo,busStopsTopo,linesTopo,stationsTopo,rapidTopo,brtTopo,trafficTopo,routesCSV) {
        
        //grab the features from the topojsons
        var blocks = topojson.feature(blocksTopo, blocksTopo.objects.blocks).features;
        var outline = topojson.feature(dcTopo, dcTopo.objects.dc).features;
        var stops = topojson.feature(busStopsTopo, busStopsTopo.objects.dc_bus_stops).features;
        var lines = topojson.feature(linesTopo, linesTopo.objects.metro_lines).features;
        var stations = topojson.feature(stationsTopo, stationsTopo.objects.metro_stations).features;
        var rapidBus = topojson.feature(rapidTopo, rapidTopo.objects.rapid_bus).features;
        var brtBus = topojson.feature(brtTopo, brtTopo.objects.rapid_bus_trans).features;
        var traffic = topojson.feature(trafficTopo, trafficTopo.objects.traffic_20).features;
        
        for (i=0; i<routesCSV.length; i++){
            var route = String(routesCSV[i]['ROUTE']);
            $('#routes-select').append("<option value="+route+">"+route+"</option>")
        };
        
        $('#add-button').click(function(){
            addBusStops(map)
        });

        //call function to add tracts information to add-able layers
        var blocksInformation = addBlocks(map, blocks);
        var blocksLayers = blocksInformation[0];
        //var blocksScales = blocksInformation[1];

        //add blank blocks to begin...
        blocksLayers["None"].addTo(map);
    
        //call function to get everything else available
        var allOtherLayers = addOtherLayers(map, outline, lines, stations, rapidBus, brtBus, traffic);
        
        var imageBounds = [[38.824, -77.11], [38.987, -76.914]];
        var pciUrl = "data/pci_raster.png";
        var popUrl = "data/pop_raster.png";
        var pciRaster = L.imageOverlay(pciUrl, imageBounds,{opacity: 0.5});
        var popRaster = L.imageOverlay(popUrl, imageBounds,{opacity: 0.5});
        
        blocksLayers["Pop Raster"] = popRaster;
        blocksLayers["PCI Raster"] = pciRaster;

        var groupedOverlays = {
          "Demographic Overlays": blocksLayers,
          "Reference Layers": allOtherLayers
        };
        
        //set options for groupedLayers control
        var options = {
            exclusiveGroups: ["Demographic Overlays"],
            collapsed: false
        }
        
        L.control.groupedLayers(baseMaps, groupedOverlays, options).addTo(map);
        
    };

    $(".leaflet-control-container").on('mousedown dblclick pointerdown wheel', function(ev){
        L.DomEvent.stopPropagation(ev);
    });
    
    var clickMarker = L.marker(50,50);
    
    map.on('click', function(e){
        map.removeLayer(clickMarker);
        var latlng = map.mouseEventToLatLng(e.originalEvent);
        var newLatLng = new L.LatLng(latlng.lat, latlng.lng);
        clickMarker.setLatLng(newLatLng);
        clickMarker.addTo(map);
        queryBusStops(map,clickMarker,latlng)
    });
    
}; // end of createMap

function queryBusStops(map,clickMarker,latlng){
    
    var lat = latlng.lat;
    var lng = latlng.lng;
    var key = 'cxZZf9-tgRgJseGvWAmC4Q';
    var getURL = 'https://jjfisher2.carto.com/api/v2/sql?format=GeoJSON&q=';
    var sql = "SELECT name, the_geom FROM JJFISHER2.DC_BUS_STOPS where stopid IN (SELECT DISTINCT(stopid) from JJFISHER2.DC_STOP_ROUTE WHERE route IN (SELECT route FROM JJFISHER2.DC_STOP_ROUTE WHERE stopid = (SELECT stopid FROM JJFISHER2.DC_BUS_STOPS WHERE ST_DISTANCE(the_geom, ST_GeomFromText('POINT("+lng+" "+lat+")',4326)) = (SELECT MIN(ST_DISTANCE(the_geom, ST_GeomFromText('POINT("+lng+" "+lat+")',4326))) FROM JJFISHER2.DC_BUS_STOPS))))&api_key=";
    
    $.getJSON(getURL+sql+key, function(data){
        var features = data.features;
        console.log(features.length)
        var busMarkerOptions = {
            radius: 3.5,
            fillColor: "black",
            color: "red",
            weight: .75,
            opacity: 0.8,
            fillOpacity: 0.8
        };

        var busPoints = L.geoJSON(features, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, busMarkerOptions);
            },
            onEachFeature: busStopName
        }).addTo(map);

        map.fitBounds(busPoints.getBounds(), {padding:[25,25]});

        $('#add-button').attr("disabled","disabled");
        $('#clear-button').removeAttr("disabled");
        $('#clear-button').click(function(){
            map.removeLayer(busPoints);
            $('#add-button').removeAttr("disabled");
            $('#clear-button').attr("disabled","disabled");
        });
    });
    
}; //end queryBusStops

function addOtherLayers(map, outline, lines, stations, rapidBus, brtBus, traffic){
    
    var layerDict = {
        'DC Outline': null,
        'Metrorail Lines': null,
        'Metrorail Stations': null,
        '2030 Rapid Bus': null,
        '2030 Bus Rapid Transit': null,
        '2016 Traffic Density': null
    };
    
    var rapidStyle = {
        "color": 'purple',
        "weight": 2.5,
        "opacity": .8
    };
    
    var rapidRoutes = L.geoJSON(rapidBus,{
        style: rapidStyle
    });
    
    var brtStyle = {
        "color": 'green',
        "weight": 2.5,
        "opacity": .8
    };
    
    var brtRoutes = L.geoJSON(brtBus,{
        style: brtStyle
    });
    
    var routes = L.geoJSON(lines,{
        style: function(feature){return routeStyle(feature)}
    });
    
/*
    var colorScale = roadColorScale(traffic);
    
    var streets = L.geoJSON(traffic,{
        style: function(feature){return streetStyle(feature,colorScale)}
    });
*/
    var streetStyle = {
        "color": '#d7191c',
        "weight": 2,
        "opacity": .8
    };
    
    var streets = L.geoJSON(traffic,{
        style: streetStyle
    });

    var outlineOptions = {
        color: "#000",
        weight: 2,
        opacity: 0.8,
        fillOpacity: 0,
        dashArray: 4
    };
    
    var outlinePoly = L.geoJSON(outline,{
        style: outlineOptions}).addTo(map);
    
    var stationMarker = L.icon({
        iconUrl: 'img/metro.svg',
        iconSize: [12,12],
        shadowUrl: 'img/circle.svg',
        shadowSize: [13,13]
        
    });
    
    var stationPoints = L.geoJSON(stations, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {icon: stationMarker});
        },
        onEachFeature: stationName
    });
    
    layerDict['DC Outline'] = outlinePoly;
    layerDict['Metrorail Lines'] = routes;
    layerDict['Metrorail Stations'] = stationPoints;
    layerDict['2030 Rapid Bus'] = rapidRoutes;
    layerDict['2030 Bus Rapid Transit'] = brtRoutes;
    layerDict['2016 Traffic Density'] = streets;
    
    return layerDict;
}; // end of  addOtherLayers;

function stationName(feature,layer){
    
    var popupContent = feature.properties['NAME'];
    
    layer.bindTooltip(popupContent, {
        offset: [0,-7],
        direction: 'top',
        className: 'popupStation'});
} // end of  stationNAME

function busStopName(feature,layer){
    
    var popupContent = feature.properties['name'];
    
    layer.bindTooltip(popupContent, {
        offset: [0,-7],
        direction: 'top',
        className: 'popupStop'});
} // end of busStopName

function routeStyle(feature){
    
    var routeColor = feature.properties['NAME'];
    
    if (routeColor === 'red'){
        var color = 'red' 
    }else if(routeColor ==='blue'){
        var color = 'blue'
    }else if(routeColor ==='green'){
        var color = 'green'
    }else if(routeColor ==='orange'){
        var color = 'orange'
    }else if(routeColor ==='silver'){
        var color = 'grey'
    }else{
        var color = 'yellow'
    };
    
    //define style
    var myStyle = {
        "color": color,
        "weight": 2.5,
        "opacity": .8
    };
    return myStyle;
}; // end of  routeStyle

/*
function streetStyle(feature,scale){
    
    var color = scale(feature.properties['AADT']);
    
    //define style
    var myStyle = {
        "color": color,
        "weight": 2,
        "opacity": .8
    };
    return myStyle;
}; // end of  streetStyle
*/

function addBlocks(map, tracts) { //source: http://bl.ocks.org/Caged/5779481
    
    var options = ['NONE','POP','PCI'];
    var dictKeys = ['None','Population','Per Capita Income']
    
    var altDitc = {};
    var scaleDict = {};
    var geojson;
    
    function highlightFeature(e) {
        var layer = e.target;
        layer.setStyle({
            "weight": 4,
            "opacity": 0.8,
            "color": 'aqua'
        });
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
    };

    function resetHighlight(e) {
        var layer = e.target;
        layer.setStyle({
        "weight": 1,
        "opacity": 0.75,
        "color": '#FFF'
        });
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
    };
    
    function onEachFeature(feature,layer,expressed) {

        var lookUp = ['POP', 'PCI']
        var fields = ['Population: ','Per Capita Income: ']

        var popupContent = '';

        for (var i=0; i < lookUp.length; i++){
            var stat = String(feature.properties[lookUp[i]]);
            popupContent += '<b>'+fields[i]+'</b>';
            popupContent += stat + '<br>';
        }
        
        if (expressed !== 'NONE'){
            layer.bindPopup(popupContent, {
                className: 'popup'});
            layer.on('mouseover', function (e) {
                this.openPopup();
            });
            layer.on('mouseout', function (e) {
                this.closePopup();
            });
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight
            });
        };
    }; // end of onEachFeature
    
    for (var i = 0; i < options.length; i++){
        var expressed = options[i];
        var dictKey = dictKeys[i];
        var colorScale = makeColorScale(expressed,tracts);
        geojson = L.geoJson(tracts, {
            style: function(feature){
                if (expressed != 'NONE'){
                    return setStyle(feature, colorScale, expressed)
                } else {
                    var myStyle = {
                        "fillColor": '#3a3a3a',
                        "fillOpacity": 0,
                        "weight": 0,
                        "opacity": 0,
                        "color": '#3a3a3a',
                        "className": String(feature.properties['GEOID'])
                    };
                    return myStyle;
                }
            },
            onEachFeature: function(feature,layer){return onEachFeature (feature,layer,expressed)}
            //http://leafletjs.com/examples/choropleth/
        })
        altDitc[dictKey] = geojson;
        scaleDict[dictKey] = colorScale;
    }
    return [altDitc, scaleDict];
}; // end of addBlocks

function setStyle(feature, colorscale, expressed){
    //find the feature's fill color based on scale and make sure it's not undefined
    var check = feature.properties[expressed];
    if (check == 'UNDEF'){
        var fillColor = "#CCC"
    }else{
        var fillColor = colorscale(feature.properties[expressed]);
    }
    //define style
    var myStyle = {
        "fillColor": fillColor,
        "fillOpacity": 0.5,
        "weight": 1,
        "opacity": 0.75,
        "color": '#FFF',
        "className": String(feature.properties['GEOID'])
    };
    return myStyle;
}; // end of  setStyle

function makeColorScale(expressed,tracts){
    
    //var colorClasses = ['#f6eff7','#bdc9e1','#67a9cf','#1c9099','#016c59'];//blue
    var colorClasses = ['#feebe2','#fbb4b9','#f768a1','#c51b8a','#7a0177'];//purple

    //create color scale generator
    var colorScale = d3.scaleQuantile()
        .range(colorClasses);

    //build array of all values of the expressed attribute
    var domainArray = [];
    for (var i=0; i<tracts.length; i++){
        var check = tracts[i].properties[expressed];
        if (check !== 'UNDEF') {
            var val = parseFloat(check);
            domainArray.push(val);
        }
    };
    //assign array of last 4 cluster minimums as domain
    colorScale.domain(domainArray);

    return colorScale;
}; // end of  makeColorScale

/*
function roadColorScale(roads){
    
    var colorClasses = ['#d7191c','#fdae61','#ffffbf','#a6d96a','#1a9641'];

    //create color scale generator
    var colorScale = d3.scaleQuantile()
        .range(colorClasses);

    //build array of all values of the expressed attribute
    var domainArray = [];
    for (var i=0; i<roads.length; i++){
        var check = roads[i].properties['AADT'];
        if (check !== 'UNDEF') {
            var val = parseFloat(check);
            domainArray.push(val);
        }
    };
    //assign array of last 4 cluster minimums as domain
    colorScale.domain(domainArray);

    return colorScale;
}; // end of  roadColorScale
*/

$(document).ready(createMap);
$(document).ready(initCharts);