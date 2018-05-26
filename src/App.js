import React from "react";

import Header from "./component/Header";
import Footer from "./component/Footer";
import Content from "./component/Content";
import View from "./component/View";
import Daily from "./component/Daily";
import forecast from './utils/daily';
import Source from "./component/Source";
import Carbon from './utils/carbon';
import Weekly from './utils/weekly';

import Forecast from './component/Forecast';

class App extends React.Component {
    state = {
        error: undefined,
        stat:false,
        loading:false,
        lon:undefined,
        lat:undefined,
        datetime:undefined,
        carbonValue:undefined,
        weeklyList:[],
        daily:[]

    };
    getWeather = async (e) => {
        e.preventDefault();
        this.setState({loading:true,stat:false});
        const city = e.target.elements.city.value;
        forecast(city).then((data) => {
            if (!data) {
                this.setState({
                    loading: false,
                    error: 'Bir Hata Oluştu!!',

                });
            } else {
                this.setState({
                    stat: true,
                    loading: false,
                    error: null,
                    lon:data.coord.lon,
                    lat:data.coord.lat,
                    datetime:data.dt,
                    daily: {
                        temperature: data.main.temp,
                        city: data.name,
                        humidity: data.main.humidity,
                        speed: data.wind.speed,
                        date: data.dt,
                        icon: data.weather[0].icon,
                        description: data.weather[0].description

                    }

                });
                this.getCarbonValue();
                this.getWeekly();
            }
        })

    };

    getCarbonValue = () => {

        const location= '0.0,10.0';
        // const location= this.state.lon+','+this.state.lat;
        const datetime='2016-12-25T01:04:08Z';
        Carbon(location,datetime).then((data) => {
            if (!data) {
                this.setState({
                    error: 'Bir Hata Oluştu!!',

                });
            } else {
                this.setState({
                    carbonValue:data.data[0].value
                });
            }
        })

    };

    getWeekly = () => {

        const location= this.state.daily['city'];
        Weekly(location).then((data) => {
            if (data) {
                this.setState({
                   weeklyList:data.list
                });
            }
        })

    };

    render() {
        const { daily,stat,loading,error,carbonValue,weeklyList} = this.state;

        return (
            <div>
            <Header/>
            <Content
                source={<Source getWeather={this.getWeather}/>}
                loading={loading}
                error={error}
                view={ stat ? (
                    <View daily={
                            <Daily
                                data={daily}
                                carbon={carbonValue}
                            />
                        }
                          weekly={

                              stat && weeklyList.length > 0 ? weeklyList.map((value,key)=>{
                                  if ((key)%8 === 0 || key===0)
                                  {
                                       return ( <Forecast
                                      date={value.dt}
                                      icon={value.weather[0].icon}
                                      temp={value.main.temp}
                                      temp_min={value.main.temp_min}
                                      description={value.weather[0].description}
                                  /> );
                              }else {
                                      return '';
                                  }


                              }):null}

                    /> ) : ''
                    }
            />

            <Footer/>
            </div>
        );
    }
}

export default App;