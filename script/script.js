$(document).ready(function(){
    let cloud1 = -800;
    let cloud2 = -500;
    let cloud3 = -700;
    let cloud4 = -400;
    let cloud5 = -600;
    let sea4titleimg=0;
    vid1 = $('#turtle_video1').get(0);
    vid2 = $('#turtle_video2').get(0);
    let flash = 0;
    setInterval(function(){
        cloud1 = cloud1+5;
        if(cloud1 > 2020){cloud1 = -800}
        $('#cloud1').css({'right':cloud1})
        cloud2 = cloud2+10;
        if(cloud2 > 2420){cloud2 = -500}
        $('#cloud2').css({'right':cloud2})
        cloud3 = cloud3+7;
        if(cloud3 > 2600){cloud3 = -700}
        $('#cloud3').css({'right':cloud3})
        cloud4 = cloud4+8;
        if(cloud4 > 2600){cloud4 = -400}
        $('#cloud4').css({'right':cloud4})
        cloud5 = cloud5+3;
        if(cloud5 > 2020){cloud5 = -600}
        $('#cloud5').css({'right':cloud5})
        
    },30)
    $('#main_text1').animate({'marginTop':'300px','opacity':'1'},1000)
    $('#main_text2').delay(1000).animate({'marginTop':'30px','opacity':'1'},1200)
    $('#scroll_arrow').animate({'bottom':'30px','opacity':'0'},function(){
        $('#scroll_arrow').animate({'bottom':'0px','opacity':'1'})
    })
    setInterval(function(){
        $('#scroll_arrow').animate({'bottom':'30px','opacity':'1'},function(){
        $('#scroll_arrow').animate({'bottom':'0px','opacity':'0'})
    })
    },1000)
    
    // 
    $(window).scroll(function(){
        sc = $(window).scrollTop();
        if(sc>=1000){
            $('#sea_title').delay(100).animate({'marginTop':'200px','opacity':'0.8'},600)
            $('#sea_1>ul').delay(800).fadeIn().animate({'opacity':'0.8'},800)
        }

        if(sc>=2000){
            $('#turtle_video1').animate({'left':'-200px','opacity':'1'},1000)
            $('#turtle1_img').delay(400).animate({'right':'-600px','opacity':'1'},1200)
        }
        if(sc>=3000){
            $('#sea_3_1').animate({'left':'-700px','opacity':'1'},1000)
            $('#sea_3_2').delay(600).animate({'top':'300px','opacity':'1'},1000)
        }
        
        if(sc>=5000){
            $('#sea_5_title').animate({'marginTop':'140px','opacity':'1'})
        }
        if(sc>=5200){
            $('#sea_5_box').animate({'opacity':'1'},1400)
        }
        if(sc>=5800){
            $('#sea_6_earth').animate({'opacity':'1'})
        }
        if(sc>=7000){
            $('#sea_7_right>h2').animate({'top':'450px','opacity':'1'},1000)
            $('#sea_7_leftimg1').animate({'opacity':'1'})
            $('#sea_7_leftimg2').animate({'opacity':'1'},1000)
            $('#sea_7_leftimg3').animate({'opacity':'1'},2000)
        }
        
    })
    $('#menu_open').click(function(){
        $(this).css({'opacity':'0'})
        $('.menu_open_box').fadeIn()
        $('#scroll_top').css({'display':'none'})
    })
    $('#close_bt').click(function(){
        $('.menu_open_box').fadeOut()
        $('#menu_open').css({'opacity':'1'})
        $('#scroll_top').css({'display':'inline'})
    })
    
    $('#sea_1>ul>li').click(function(){
        $(this).css({'opacity':'1','marginRight':'10px','width':'140px'}).siblings().css({'opacity':0.5,'width':'140px','marginRight':'10px'})
        $('#sea_1>ul').css({'width':'700px'})
        $('#sea_1_box').css({'display':'inline-block'})
    })
    
    $('#sea_1>ul>li:nth-child(1)').click(function(){
        $('#sea_1_textbox>li').children('.sea_1_text').hide()
        $('#sea_1_textbox>li:nth-child(1)').children('.sea_1_text').fadeIn()
        $('#sea_1_textbox>li:nth-child(1)>.sea_1_text>h4').text('Nemopilena nomurai')
        $('#sea_1_textbox>li:nth-child(1)>.sea_1_text>p').text('The diameter when fully grown is slightly greater than the height of an average human. The species was named in tribute to Mr. Kanichi  Nomura, Director General of the Fukui Prefectural Fisheries Experimental Station, who in early December 1921 sent a specimen in a 72-litre (16 imp gal; 19 US gal) wooden tank to Professor Kishinouye, who found that it was unknown and spent some time at the station to study living specimens.Growing up to 2 m (6 ft 7 in) in diameter and weighing up to 200 kg (440 lb), Nomuras jellyfish reside pri the waters between China and Japan, primarily centralized in the Yellow Sea and East China Sea. Populati appear to be increasing with frequency in the past 20 years. Possible reasons for the population increase in Jellyfish include climate change, overfishing, and coastal modification adding substrate for asexually producing polyps.')
    })
    $('#sea_1>ul>li:nth-child(2)').click(function(){
        $('#sea_1_textbox>li').children('.sea_1_text').hide()
        $('#sea_1_textbox>li:nth-child(2)').children('.sea_1_text').fadeIn()
        $('#sea_1_textbox>li:nth-child(2)>.sea_1_text>h4').text('Aurelia aurita')
        $('#sea_1_textbox>li:nth-child(2)>.sea_1_text>p').text('The species Aurelia aurita is found in the North, Black, Baltic and Caspian Seas, Northeast Atlantic, Greenland, northeastern USA and Canada, Northwest Pacific and South America. In general, Aurelia is an inshore genus that can be found in estuaries and harbors.Moon jellyfish swimming (high resolution) Aurelia aurita lives in ocean water temperatures ranging from 6–31 °C (43–88 °F); with optimum temperatures of 9–19 °C (48–66 °F). It prefers temperate seas with consistent currents. It has been found in waters with salinity as low as 6 parts per thousand. The relation between summer hypoxia and moon jellyfish distribution is prominent during the summer months of July and August where temperatures are high and dissolved oxygen (DO) is low. Of the three environmental conditions tested, bottom DO has the most significant effect on moon jellyfish abundance. Moon jellyfish abundance is the highest when bottom dissolved oxygen concentration is lower than 2.0 mg L−1.')
    })
    $('#sea_1>ul>li:nth-child(3)').click(function(){
        $('#sea_1_textbox>li').children('.sea_1_text').hide()
        $('#sea_1_textbox>li:nth-child(3)').children('.sea_1_text').fadeIn()
        $('#sea_1_textbox>li:nth-child(3)>.sea_1_text>h4').text('Dactylometra quinquecirrha')
        $('#sea_1_textbox>li:nth-child(3)>.sea_1_text>p').text('The medusae of C. quinquecirrha measures up to 40 cm (16 in) in diameter. The sea nettle is radially symmetrical, marine, and carnivorous. Its mouth is located at the center of one end of the body, which opens to a gastrovascular cavity that is used for digestion. It has tentacles that surround the mouth to capture food. Sea nettles have no excretory or respiratory organs. Each sea nettle is either in a free-swimming stage or a polyp stage. The free-swimming stage, or medusa stage reproduces sexually, and the polyp stage reproduces asexually.The Atlantic sea nettle is a bell-shaped invertebrate, usually semi-transparent and with small, white dots and reddish-brown stripes. Sea nettles without stripes have a bell that appears white or opaque. The sea nettles sting is rated from "moderate" to "severe" and can be noxious to smaller prey; it is not, however, potent enough to cause human death, except by allergic reaction.')
    })
    $('#sea_1>ul>li:nth-child(4)').click(function(){
        $('#sea_1_textbox>li').children('.sea_1_text').hide()
        $('#sea_1_textbox>li:nth-child(4)').children('.sea_1_text').fadeIn()
        $('#sea_1_textbox>li:nth-child(4)>.sea_1_text>h4').text('Phyllorhiza punctata')
        $('#sea_1_textbox>li:nth-child(4)>.sea_1_text>p').text('The species has been found in the waters off the Hawaiian Islands since at least 1945, in the Mediterranean Sea since at least 1965, and in large numbers in the Gulf of Mexico since 2000. In the eastern Pacific, it has been sighted in the San Diego area and the Gulf of California as early as 1981. While it is not known how it was introduced to these regions, it has been theorized that budding polyps may have attached themselves to ships, or were carried in a ships ballast tank which was subsequently dumped. As an invasive species, it has become a threat to several species of shrimp. In Gulf waters, the medusae grow to unusually large size, upwards of 60 cm (24 in) across.In July 2007 smallish individuals were seen in Bogue Sound much further north along the North Carolina coast. However, their ability to consume plankton and the eggs and larvae of important fish species is cause for concern.')
    })
    $('#sea_1>ul>li:nth-child(5)').click(function(){
        $('#sea_1_textbox>li').children('.sea_1_text').hide()
        $('#sea_1_textbox>li:nth-child(5)').children('.sea_1_text').fadeIn()
        $('#sea_1_textbox>li:nth-child(5)>.sea_1_text>h4').text('Chrysaora melanaster')
        $('#sea_1_textbox>li:nth-child(5)>.sea_1_text>p').text('Chrysaora melanaster, commonly known as the northern sea nettle or brown jellyfish, is a species of jellyfish native to the northern Pacific Ocean and adjacent parts of the Arctic Ocean. It is sometimes referred to as a Pacific sea nettle, but this name is also used for C. fuscescens; the name Japanese sea nettle was also used for this species, but that name now exclusively refers to C. pacifica. Although jellyfish kept in public aquariums sometimes are referred to as C. melanaster, this is the result of the historical naming confusion and these actually are C. pacifica. The medusa of the northern sea nettle can reach 60 cm (2 ft) in diameter with tentacles growing up to 3 m (10 ft). The number of tentacles is up to 24 (three per octant). It dwells at depths of up to 100 meters, where it feeds on copepods, larvaceans, small fish, large zooplankton, and other jellies. The sting is mild, although can cause serious skin irritation and burning. The lifespan is unknown.')
    })
    $('#sea_1>ul>li:nth-child(6)').click(function(){
        $('#sea_1_textbox>li').children('.sea_1_text').hide()
        $('#sea_1_textbox>li:nth-child(6)').children('.sea_1_text').fadeIn()
        $('#sea_1_textbox>li:nth-child(6)>.sea_1_text>h4').text('Catostylus sp')
        $('#sea_1_textbox>li:nth-child(6)>.sea_1_text>p').text('The jelly blubber (Catostylus mosaicus), also known as the blue blubber jellyfish, is a species of jellyfish from coastal regions in the Indo-Pacific. It is the most commonly encountered jellyfish along the Australian eastern coast and large swarms sometimes appear in estuarine waters. In Sydney waters, the jelly blubbers large bell is a creamy white or brown colour, but farther north in Australia it is usually blue. The colours are derived from pigment produced by the jellyfish itself (not symbiotic algae, as in some other jellyfish). There is no obvious mouth on the underside, but there are small openings on each arm, through which food is passed to the stomach. The tentacles also have stinging cells that can capture tiny crustaceans and other plankton. It grows to a diameter of 30–45 cm (12–18 in).The sting can be painful but generally poses no serious risk to animals.')
    })
    $('#sea_1>ul>li:nth-child(7)').click(function(){
        $('#sea_1_textbox>li').children('.sea_1_text').hide()
        $('#sea_1_textbox>li:nth-child(7)').children('.sea_1_text').fadeIn()
        $('#sea_1_textbox>li:nth-child(7)>.sea_1_text>h4').text('Cyanea capillata Linnaeus')
        $('#sea_1_textbox>li:nth-child(7)>.sea_1_text>p').text('The lions mane jellyfish (Cyanea capillata), also known as the giant jellyfish, arctic red jellyfish, or the hair jelly, is one of the largest known species of jellyfish. Its range is confined to cold, boreal waters of the Arctic, northern Atlantic, and northern Pacific Oceans. It is common in the English Channel, Irish Sea, North Sea, and in western Scandinavian waters south to Kattegat and Øresund. It may also drift into the southwestern part of the Baltic Sea (where it cannot breed due to the low salinity). Similar jellyfish – which may be the same species – are known to inhabit seas near Australia and New Zealand. The largest recorded specimen was measured off the coast of Massachusetts in 1870 and had a bell with a diameter of 210 centimetres (7 feet) and tentacles around 36.6 m (120 ft) long. Lions mane jellyfish have been observed below 42°N latitude for some time in the larger bays of the east coast of the United States.')
    })
    $('#sea_1>ul>li:nth-child(8)').click(function(){
        $('#sea_1_textbox>li').children('.sea_1_text').hide()
        $('#sea_1_textbox>li:nth-child(8)').children('.sea_1_text').fadeIn()
        $('#sea_1_textbox>li:nth-child(8)>.sea_1_text>h4').text('Spirocodon saltatrix')
        $('#sea_1_textbox>li:nth-child(8)>.sea_1_text>p').text('Spirocodon is a monotypic genus of hydrozoans with Spirocodon saltatrix as the only species in the genus. It is found in the north-western Pacific Ocean, and was first described in 1818 by the German naturalist and explorer Wilhelm Gottlieb Tilesius von Tilenau.Spirocodon found only in winter (late November to early February) from the surface of the East Sea and the South Sea of ​​Korea to a depth of about 10 m, moving and swimming with long tentacles 3 to 4 times the length of an umbrella (body) This is very beautiful. It is known as a species endemic to the Far East waters including Korea and Japan. When swimming, it does not catch prey, but only eats prey caught in its tentacles. The diameter of the umbrella is around 5cm, and the total size including the tentacles is about 15cm.')
    })

    $('#sea_1_close_bt').click(function(){
        $('#sea_1_box').css({'display':'none'})
        $('#sea_1>ul>li').css({'width':'160px','marginRight':'36px','opacity':'1'})
        $('#sea_1>ul>li:nth-child(4n)').css({'marginRight':'0'})
        $('#sea_1>ul').css({'width':'800px'})
    })
    
    let slide4_num = 0;
    $('#sea_4_rightbt').click(function(){
        slide4_num =slide4_num-700;
        if(slide4_num < -2800){slide4_num = 0}
        $('#sea_4_slide').animate({'left':slide4_num})
    })
    $('#sea_4_leftbt').click(function(){
        slide4_num =slide4_num+700;
        if(slide4_num > 0){slide4_num=-2800}
        $('#sea_4_slide').animate({'left':slide4_num})
    })
   
   $('#sea_5_box>li:nth-child(1)>.sea_5_bt').click(function(){
       $('#sea_5_box>li:nth-child(1)').css({'width':'1400px','height':'400px','border-radius':'20px','border':'none'})
       $('#sea_5_box>li:nth-child(2)').css({'width':'1000px','height':'100px','border-bottom':'1px solid #ddd','background-color':'transparent','border-radius':'0'})
       $('#sea_5_box>li:nth-child(3)').css({'width':'1000px','height':'100px','border-bottom':'1px solid #ddd','background-color':'transparent','border-radius':'0'})
       $('#sea_5_box>li:nth-child(4)').css({'width':'1000px','height':'100px','border-bottom':'none','background-color':'transparent','border-radius':'0'})
       $('#sea_5_box>li>.sea_5_bt').css({'display':'block'})
       $(this).css({'display':'none'})
       $('#sea_5_box>li>video').hide()
       $('#sea_5_box>li:nth-child(1)>video').show()
       $('#sea_5_box>li>.sea_5_textbox').hide()
       $('#sea_5_box>li:nth-child(1)>.sea_5_textbox').show()
       $('#sea_5_box>li>h2').show()
       $('#sea_5_box>li:nth-child(1)>h2').hide()
   })
   $('#sea_5_box>li:nth-child(2)>.sea_5_bt').click(function(){
       $('#sea_5_box>li:nth-child(2)').css({'width':'1400px','height':'400px','border-radius':'20px','border':'none'})
       $('#sea_5_box>li:nth-child(1)').css({'width':'1000px','height':'100px','border-bottom':'1px solid #ddd','background-color':'transparent','border-radius':'0'})
       $('#sea_5_box>li:nth-child(3)').css({'width':'1000px','height':'100px','border-bottom':'1px solid #ddd','background-color':'transparent','border-radius':'0'})
       $('#sea_5_box>li:nth-child(4)').css({'width':'1000px','height':'100px','border-bottom':'none','background-color':'transparent','border-radius':'0'})
       $('#sea_5_box>li>.sea_5_bt').css({'display':'block'})
       $(this).css({'display':'none'})
       $('#sea_5_box>li>video').hide()
       $('#sea_5_box>li:nth-child(2)>video').show()
       $('#sea_5_box>li>.sea_5_textbox').hide()
       $('#sea_5_box>li:nth-child(2)>.sea_5_textbox').show()
       $('#sea_5_box>li>h2').show()
       $('#sea_5_box>li:nth-child(2)>h2').hide()
   })
   $('#sea_5_box>li:nth-child(3)>.sea_5_bt').click(function(){
       $('#sea_5_box>li:nth-child(3)').css({'width':'1400px','height':'400px','border-radius':'20px','border':'none'})
       $('#sea_5_box>li:nth-child(1)').css({'width':'1000px','height':'100px','border-bottom':'1px solid #ddd','background-color':'transparent','border-radius':'0'})
       $('#sea_5_box>li:nth-child(2)').css({'width':'1000px','height':'100px','border-bottom':'1px solid #ddd','background-color':'transparent','border-radius':'0'})
       $('#sea_5_box>li:nth-child(4)').css({'width':'1000px','height':'100px','border-bottom':'none','background-color':'transparent','border-radius':'0'})
       $('#sea_5_box>li>.sea_5_bt').css({'display':'block'})
       $(this).css({'display':'none'})
       $('#sea_5_box>li>video').hide()
       $('#sea_5_box>li:nth-child(3)>video').show()
       $('#sea_5_box>li>.sea_5_textbox').hide()
       $('#sea_5_box>li:nth-child(3)>.sea_5_textbox').show()
       $('#sea_5_box>li>h2').show()
       $('#sea_5_box>li:nth-child(3)>h2').hide()
   })
   $('#sea_5_box>li:nth-child(4)>.sea_5_bt').click(function(){
       $('#sea_5_box>li:nth-child(4)').css({'width':'1400px','height':'400px','border-radius':'20px','border':'none'})
       $('#sea_5_box>li:nth-child(1)').css({'width':'1000px','height':'100px','border-bottom':'1px solid #ddd','background-color':'transparent','border-radius':'0'})
       $('#sea_5_box>li:nth-child(2)').css({'width':'1000px','height':'100px','border-bottom':'1px solid #ddd','background-color':'transparent','border-radius':'0'})
       $('#sea_5_box>li:nth-child(3)').css({'width':'1000px','height':'100px','border-bottom':'1px solid #ddd','background-color':'transparent','border-radius':'0'})
       $('#sea_5_box>li>.sea_5_bt').css({'display':'block'})
       $(this).css({'display':'none'})
       $('#sea_5_box>li>video').hide()
       $('#sea_5_box>li:nth-child(4)>video').show()
       $('#sea_5_box>li>.sea_5_textbox').hide()
       $('#sea_5_box>li:nth-child(4)>.sea_5_textbox').show()
       $('#sea_5_box>li>h2').show()
       $('#sea_5_box>li:nth-child(4)>h2').hide()
   })

    $('#earth2').animate({'width':'20px','opacity':'1','left':'150px','top':'480px'},function(){
            $('#earth2').animate({'width':'300px','opacity':'0','left':'0px','top':'400px'},1800,function(){
                 $('#earth2').animate({'width':'20px','opacity':'0','left':'150px','top':'480px'},1000)
            })
        })


    $('#sea_6_2').animate({'bottom':'100px'},function(){
        $('#sea_7_2').animate({'bottom':'120px'},600)
        })
    $('#sea_6_5').animate({'top':'160px'},function(){
        $('#sea_6_5').animate({'top':'180px'},600)
        })
        
    setInterval(function(){
        $('#earth2').animate({'width':'20px','opacity':'1','left':'150px','top':'480px'},function(){
            $('#earth2').animate({'width':'300px','opacity':'0','left':'0px','top':'400px'},1800,function(){
                $('#earth2').animate({'width':'20px','opacity':'0','left':'150px','top':'480px'},1000)
            })
        })
        },4000)
        setInterval(function(){
            $('#sea_6_2').animate({'bottom':'100px'},function(){
                $('#sea_6_2').animate({'bottom':'120px'},600)
            })
        },1000)
        setInterval(function(){
            $('#sea_6_5').animate({'top':'160px'},function(){
                $('#sea_6_5').animate({'top':'180px'},600)
            })
        },1000)
        
        function scrollRotate() {
            let sea_6_4 = document.getElementById("sea_6_4");
            let sea_6_6 = document.getElementById("sea_6_6");
            sea_6_4.style.transform = "rotate(" + window.pageYOffset/4 + "deg)";
            sea_6_6.style.transform = "rotate(-" + window.pageYOffset/6 + "deg)";
        }
        window.addEventListener('scroll',scrollRotate);

        
        


        $('#sea_8_text_box>button').click(function(){
            $('#sea_8_text_box').css({'display':'none'})
            $('#sea_8_videobox>video').delay(400).animate({'opacity':'1'},600)
        })

        $('#menu_list>li:nth-child(1)').click(function(){
            $('body,html').animate({'scrollTop':'1200'},500)
        })
        $('#menu_list>li:nth-child(2)').click(function(){
            $('body,html').animate({'scrollTop':'2200'},500)
        })
        $('#menu_list>li:nth-child(3)').click(function(){
            $('body,html').animate({'scrollTop':'3200'},500)
        })
        $('#menu_list>li:nth-child(4)').click(function(){
            $('body,html').animate({'scrollTop':'4200'},500)
        })
        $('#menu_list>li:nth-child(5)').click(function(){
            $('body,html').animate({'scrollTop':'5200'},500)
        })
        $('#menu_list>li:nth-child(6)').click(function(){
            $('body,html').animate({'scrollTop':'6200'},500)
        })
        $('#menu_list>li:nth-child(7)').click(function(){
            $('body,html').animate({'scrollTop':'9200'},500)
        })
        
        $('#scroll_top').click(function(){
            $('body,html').animate({'scrollTop':'0'},500)
        })

    
    
    
    
})