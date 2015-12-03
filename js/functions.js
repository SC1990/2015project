function result()
{
	var counter=0;
	
	
	var yesAnswers = $(".yesAnswer");
	
	for(i = 0; i < yesAnswers.length; i++)
	{
		if(yesAnswers[i].checked)
		{
			counter++;
		}
		
	}
	if(counter == 1 || counter < 1)
		{
			var score = document.getElementById("score");
			score.innerHTML ="Your score is low. Exercise more and eat a balanced diet." ; 
			
		}
	else if(counter > 1 && counter <= 3)
		{
			var score = document.getElementById("score");
			score.innerHTML ="Your score is ok. You could do with improving your diet a bit. "; 
		}
	else
		{
			var score = document.getElementById("score");
			score.innerHTML ="Your score is good. Keep doing what you're doing. "; 
		}
}


function changeStatistics()
	{
		var dropdown = document.getElementById("yearDropdown");
		var year = dropdown.options[dropdown.selectedIndex].value;

		var heartStats = document.getElementById("heartStatistic");
		var strokeStats = document.getElementById("strokeStatistic");
		var pulmonaryStats = document.getElementById("pulmonaryStatistic");
		
		if(year==2014)
		{
			heartStats.innerHTML="8 million";
			strokeStats.innerHTML="3 million";
			pulmonaryStats.innerHTML="1 million";
		}
		else if(year==2013)
		{
			heartStats.innerHTML="7 million";
			strokeStats.innerHTML="4 million";
			pulmonaryStats.innerHTML="2 million";
		}
		else if(year==2012)
		{
			heartStats.innerHTML="5 million";
			strokeStats.innerHTML="2 million";
			pulmonaryStats.innerHTML="1 million";
		}
		else if(year==2011)
		{
			heartStats.innerHTML="2.5 million";
			strokeStats.innerHTML="4 million";
			pulmonaryStats.innerHTML="2 million";
		}
		else
		{
			heartStats.innerHTML="";
			strokeStats.innerHTML="";
			pulmonaryStats.innerHTML="";
		}
		
		
	}