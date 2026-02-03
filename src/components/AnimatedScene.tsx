
import React from 'react';
import './AnimatedScene.css';

const Cuboid = ({ className }: { className?: string }) => (
    <div className={`cuboid ${className || ''}`}>
        <div className="cuboid__side"></div>
        <div className="cuboid__side"></div>
        <div className="cuboid__side"></div>
        <div className="cuboid__side"></div>
        <div className="cuboid__side"></div>
        <div className="cuboid__side"></div>
    </div>
);

const AnimatedScene = () => {
    return (
        <div className="animated-scene-wrapper">
            <div className="scene">
                <div className="cloud cloud--one">
                    <div className="cloud__shift">
                        <div className="cloud__body">
                            <div>
                                <Cuboid className="cuboid--cloud" />
                            </div>
                            <div>
                                <Cuboid className="cuboid--cloud" />
                            </div>
                            <div>
                                <Cuboid className="cuboid--cloud" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cloud cloud--two">
                    <div className="cloud__shift">
                        <div className="cloud__body">
                            <div>
                                <Cuboid className="cuboid--cloud" />
                            </div>
                            <div>
                                <Cuboid className="cuboid--cloud" />
                            </div>
                            <div>
                                <Cuboid className="cuboid--cloud" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cloud cloud--three">
                    <div className="cloud__shift">
                        <div className="cloud__body">
                            <div>
                                <Cuboid className="cuboid--cloud" />
                            </div>
                            <div>
                                <Cuboid className="cuboid--cloud" />
                            </div>
                            <div>
                                <Cuboid className="cuboid--cloud" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="plane__floater">
                    <div className="plane__looper">
                        <div className="plane">
                            <div className="plane__wheels">
                                <div className="plane__axle">
                                    <Cuboid className="cuboid--axle" />
                                </div>
                                <div className="plane__wheel plane__wheel--left">
                                    <Cuboid className="cuboid--wheel-left" />
                                </div>
                                <div className="plane__wheel plane__wheel--right">
                                    <Cuboid className="cuboid--wheel-right" />
                                </div>
                            </div>
                            <div className="plane__body">
                                <Cuboid className="cuboid--body" />
                            </div>
                            <div className="plane__nose">
                                <Cuboid className="cuboid--nose" />
                            </div>
                            <div className="plane__propellor">
                                <div className="propellor"></div>
                            </div>
                            <div className="plane__screen">
                                <Cuboid className="cuboid--screen" />
                            </div>
                            <div className="plane__wings wings">
                                <div className="wings__top">
                                    <Cuboid className="cuboid--wings-top" />
                                </div>
                                <div className="wings__ghost">
                                    <Cuboid className="cuboid--wings-ghost" />
                                </div>
                                <div className="wings__bottom">
                                    <Cuboid className="cuboid--wings-bottom" />
                                </div>
                                <div className="wings__strobe wings__strobe--left">
                                    <Cuboid className="cuboid--strobe" />
                                </div>
                                <div className="wings__strobe wings__strobe--right">
                                    <Cuboid className="cuboid--strobe" />
                                </div>
                            </div>
                            <div className="plane__tail">
                                <Cuboid className="cuboid--tail" />
                            </div>
                            <div className="plane__stabilizer plane__stabilizer--horizontal">
                                <Cuboid className="cuboid--horizontal-stabilizer" />
                            </div>
                            <div className="plane__stabilizer plane__stabilizer--vertical">
                                <Cuboid className="cuboid--vertical-stabilizer" />
                            </div>
                            <div className="plane__beacon">
                                <Cuboid className="cuboid--beacon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedScene;
