$(document).ready(function(){  
                                $.fn.StarMouseOver = function(id)
                                {
                                    switch(id)
                                    {
                                        case 'star1':
                                                $('#star1').removeClass('emptyStar');
                                                $('#star1').addClass('fullStar');
                                            break;
                                        case 'star2':
                                                $('#star1').removeClass('emptyStar');
                                                $('#star1').addClass('fullStar');
                                                $('#star2').removeClass('emptyStar');
                                                $('#star2').addClass('fullStar');
                                            break;
                                        case 'star3':
                                                $('#star1').removeClass('emptyStar');
                                                $('#star1').addClass('fullStar');
                                                $('#star2').removeClass('emptyStar');
                                                $('#star2').addClass('fullStar');
                                                $('#star3').removeClass('emptyStar');
                                                $('#star3').addClass('fullStar');
                                            break;
                                        case 'star4':
                                            $('#star1').removeClass('emptyStar');
                                            $('#star1').addClass('fullStar');
                                            $('#star2').removeClass('emptyStar');
                                            $('#star2').addClass('fullStar');
                                            $('#star3').removeClass('emptyStar');
                                            $('#star3').addClass('fullStar');
                                            $('#star4').removeClass('emptyStar');
                                            $('#star4').addClass('fullStar');
                                            break;
                                        case 'star5':
                                            $('#star1').removeClass('emptyStar');
                                            $('#star1').addClass('fullStar');
                                            $('#star2').removeClass('emptyStar');
                                            $('#star2').addClass('fullStar');
                                            $('#star3').removeClass('emptyStar');
                                            $('#star3').addClass('fullStar');
                                            $('#star4').removeClass('emptyStar');
                                            $('#star4').addClass('fullStar');
                                            $('#star5').removeClass('emptyStar');
                                            $('#star5').addClass('fullStar');
                                            break;
                                    }
                                }
                                
                                $.fn.StarMouseOut = function(id)
                                {
                                    switch(id)
                                    {
                                        case 'star1':
                                            if (!$('#star1').hasClass('selectedStar'))
                                            {
                                                $('#star1').addClass('emptyStar');
                                                $('#star1').removeClass('fullStar');
                                            }
                                            break;
                                        case 'star2':
                                            if (!$('#star1').hasClass('selectedStar'))
                                            {
                                                $('#star1').addClass('emptyStar');
                                                $('#star1').removeClass('fullStar');
                                            }
                                            if (!$('#star2').hasClass('selectedStar'))
                                            {
                                                $('#star2').addClass('emptyStar');
                                                $('#star2').removeClass('fullStar');
                                            }
                                            break;
                                        case 'star3':
                                            if (!$('#star1').hasClass('selectedStar'))
                                            {
                                                $('#star1').addClass('emptyStar');
                                                $('#star1').removeClass('fullStar');
                                            }
                                            if (!$('#star2').hasClass('selectedStar'))
                                            {
                                                $('#star2').addClass('emptyStar');
                                                $('#star2').removeClass('fullStar');
                                            }
                                            if (!$('#star3').hasClass('selectedStar'))
                                            {
                                                $('#star3').addClass('emptyStar');
                                                $('#star3').removeClass('fullStar');
                                            }
                                            break;
                                        case 'star4':
                                            if (!$('#star1').hasClass('selectedStar'))
                                            {
                                                $('#star1').addClass('emptyStar');
                                                $('#star1').removeClass('fullStar');
                                            }
                                            if (!$('#star2').hasClass('selectedStar'))
                                            {
                                                $('#star2').addClass('emptyStar');
                                                $('#star2').removeClass('fullStar');
                                            }
                                            if (!$('#star3').hasClass('selectedStar'))
                                            {
                                                $('#star3').addClass('emptyStar');
                                                $('#star3').removeClass('fullStar');
                                            }
                                            if (!$('#star4').hasClass('selectedStar'))
                                            {
                                                $('#star4').addClass('emptyStar');
                                                $('#star4').removeClass('fullStar');
                                            }
                                            break;
                                        case 'star5':
                                            if (!$('#star1').hasClass('selectedStar'))
                                            {
                                                $('#star1').addClass('emptyStar');
                                                $('#star1').removeClass('fullStar');
                                            }
                                            if (!$('#star2').hasClass('selectedStar'))
                                            {
                                                $('#star2').addClass('emptyStar');
                                                $('#star2').removeClass('fullStar');
                                            }
                                            if (!$('#star3').hasClass('selectedStar'))
                                            {
                                                $('#star3').addClass('emptyStar');
                                                $('#star3').removeClass('fullStar');
                                            }
                                            if (!$('#star4').hasClass('selectedStar'))
                                            {
                                                $('#star4').addClass('emptyStar');
                                                $('#star4').removeClass('fullStar');
                                            }
                                            if (!$('#star5').hasClass('selectedStar'))
                                            {
                                                $('#star5').addClass('emptyStar');
                                                $('#star5').removeClass('fullStar');
                                            }
                                            break;
                                    }
                                }
                                
                                $.fn.StarMouseClick = function(id)
                                {
                                    switch(id)
                                    {
                                        case 'star1':
                                            if ($('#star1').hasClass('selectedStar'))
                                                {
                                                     if (!$('#star2').hasClass('selectedStar'))
                                                     {
                                                         $('#star1').removeClass('selectedStar');
                                                         $('#star1').removeClass('fullStar');
                                                         $('#star1').addClass('emptyStar');
                                                         $('#how_many_stars').val('0');
                                                     }
                                                     else
                                                     {
                                                         if ($('#star2').hasClass('selectedStar'))
                                                            {
                                                                $('#star2').removeClass('selectedStar');
                                                                $('#star2').removeClass('fullStar');
                                                                $('#star2').addClass('emptyStar');
                                                            }

                                                        if ($('#star3').hasClass('selectedStar'))
                                                            {
                                                                $('#star3').removeClass('selectedStar');
                                                                $('#star3').removeClass('fullStar');
                                                                $('#star3').addClass('emptyStar');
                                                            }
                                                       
                                                        if ($('#star4').hasClass('selectedStar'))
                                                            {
                                                                $('#star4').removeClass('selectedStar');
                                                                $('#star4').removeClass('fullStar');
                                                                $('#star4').addClass('emptyStar');
                                                            }
                                                       
                                                        if ($('#star5').hasClass('selectedStar'))
                                                            {
                                                                $('#star5').removeClass('selectedStar');
                                                                $('#star5').removeClass('fullStar');
                                                                $('#star5').addClass('emptyStar');
                                                            }
                                                            $('#how_many_stars').val('1');
                                                      }
                                                }
                                            else
                                                {
                                                    $('#star1').addClass('selectedStar');
                                                    $('#how_many_stars').val('1');
                                                }
                                            break;
                                        case 'star2':
                                            if ($('#star2').hasClass('selectedStar'))
                                                {
                                                    if (!$('#star3').hasClass('selectedStar'))
                                                        {
                                                            $('#star1').removeClass('selectedStar');
                                                            $('#star2').removeClass('selectedStar');
                                                            $('#star1').removeClass('fullStar');
                                                            $('#star2').removeClass('fullStar');
                                                            $('#star1').addClass('emptyStar');
                                                            $('#star2').addClass('emptyStar');
                                                            $('#how_many_stars').val('0');
                                                        }
                                                    else
                                                        {
                                                           if ($('#star3').hasClass('selectedStar'))
                                                            {
                                                                $('#star3').removeClass('selectedStar');
                                                                $('#star3').removeClass('fullStar');
                                                                $('#star3').addClass('emptyStar');
                                                            }
                                                       
                                                            if ($('#star4').hasClass('selectedStar'))
                                                                {
                                                                    $('#star4').removeClass('selectedStar');
                                                                    $('#star4').removeClass('fullStar');
                                                                    $('#star4').addClass('emptyStar');
                                                                }

                                                            if ($('#star5').hasClass('selectedStar'))
                                                                {
                                                                    $('#star5').removeClass('selectedStar');
                                                                    $('#star5').removeClass('fullStar');
                                                                    $('#star5').addClass('emptyStar');
                                                                }
                                                                $('#how_many_stars').val('2');
                                                            }
                                                }
                                            else
                                                {
                                                    $('#star1').addClass('selectedStar');
                                                    $('#star2').addClass('selectedStar');
                                                    $('#how_many_stars').val('2');
                                                }
                                            break;
                                        case 'star3':
                                            if ($('#star3').hasClass('selectedStar'))
                                                {
                                                    if (!$('#star4').hasClass('selectedStar'))
                                                        {
                                                            $('#star1').removeClass('selectedStar');
                                                            $('#star2').removeClass('selectedStar');
                                                            $('#star3').removeClass('selectedStar');
                                                            $('#star1').removeClass('fullStar');
                                                            $('#star2').removeClass('fullStar');
                                                            $('#star3').removeClass('fullStar');
                                                            $('#star1').addClass('emptyStar');
                                                            $('#star2').addClass('emptyStar');
                                                            $('#star3').addClass('emptyStar');
                                                            $('#how_many_stars').val('0');
                                                        }
                                                    else
                                                        {
                                                       
                                                            if ($('#star4').hasClass('selectedStar'))
                                                                {
                                                                    $('#star4').removeClass('selectedStar');
                                                                    $('#star4').removeClass('fullStar');
                                                                    $('#star4').addClass('emptyStar');
                                                                }

                                                            if ($('#star5').hasClass('selectedStar'))
                                                                {
                                                                    $('#star5').removeClass('selectedStar');
                                                                    $('#star5').removeClass('fullStar');
                                                                    $('#star5').addClass('emptyStar');
                                                                }
                                                                $('#how_many_stars').val('3');
                                                            }
                                                }
                                            else
                                                {
                                                    $('#star1').addClass('selectedStar');
                                                    $('#star2').addClass('selectedStar');
                                                    $('#star3').addClass('selectedStar');
                                                    $('#how_many_stars').val('3');
                                                }
                                            break;
                                        case 'star4':
                                             if ($('#star4').hasClass('selectedStar'))
                                                {
                                                    if (!$('#star5').hasClass('selectedStar'))
                                                        {
                                                            $('#star1').removeClass('selectedStar');
                                                            $('#star2').removeClass('selectedStar');
                                                            $('#star3').removeClass('selectedStar');
                                                            $('#star4').removeClass('selectedStar');
                                                            $('#star1').removeClass('fullStar');
                                                            $('#star2').removeClass('fullStar');
                                                            $('#star3').removeClass('fullStar');
                                                            $('#star4').removeClass('fullStar');
                                                            $('#star1').addClass('emptyStar');
                                                            $('#star2').addClass('emptyStar');
                                                            $('#star3').addClass('emptyStar');
                                                            $('#star4').addClass('emptyStar');
                                                            $('#how_many_stars').val('0');
                                                        }
                                                    else
                                                        {
                                                            if ($('#star5').hasClass('selectedStar'))
                                                                {
                                                                    $('#star5').removeClass('selectedStar');
                                                                    $('#star5').removeClass('fullStar');
                                                                    $('#star5').addClass('emptyStar');
                                                                } 
                                                                $('#how_many_stars').val('4');
                                                            }
                                                }
                                            else
                                                {
                                                    $('#star1').addClass('selectedStar');
                                                    $('#star2').addClass('selectedStar');
                                                    $('#star3').addClass('selectedStar');
                                                    $('#star4').addClass('selectedStar');
                                                    $('#how_many_stars').val('4');
                                                }
                                            break;
                                        case 'star5':
                                            if ($('#star5').hasClass('selectedStar'))
                                                {
                                                    $('#star1').removeClass('selectedStar');
                                                    $('#star2').removeClass('selectedStar');
                                                    $('#star3').removeClass('selectedStar');
                                                    $('#star4').removeClass('selectedStar');
                                                    $('#star5').removeClass('selectedStar');
                                                    $('#star1').removeClass('fullStar');
                                                    $('#star2').removeClass('fullStar');
                                                    $('#star3').removeClass('fullStar');
                                                    $('#star4').removeClass('fullStar');
                                                    $('#star5').removeClass('fullStar');
                                                    $('#star1').addClass('emptyStar');
                                                    $('#star2').addClass('emptyStar');
                                                    $('#star3').addClass('emptyStar');
                                                    $('#star4').addClass('emptyStar');
                                                    $('#star5').addClass('emptyStar');
                                                    $('#how_many_stars').val('0');
                                                }
                                            else
                                                {
                                                    $('#star1').addClass('selectedStar');
                                                    $('#star2').addClass('selectedStar');
                                                    $('#star3').addClass('selectedStar');
                                                    $('#star4').addClass('selectedStar');
                                                    $('#star5').addClass('selectedStar');
                                                    $('#how_many_stars').val('5');
                                                }
                                            break;
                                    }
                                }
});