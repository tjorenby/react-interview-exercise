import React from "react";
import {theme} from '@theme/index';
import './Glob.scss';

/**
 * Feel free to customize or use this however you like, extra credit: What would you change about this component?
 * @param Glob 
 * @returns An interactive globby thing
 */

const Glob: React.FC<{
    color?:string, 
    size?:string[], //Width / Height 
    globSizes?:number[][],
    globPositions?:number[][],
    top?: string,
    bottom?: string,
    left?: string,
    right?: string,
    opacity?:number,
    speed?:number,
    radius?:string,
    rotate?:number
}> = ({
    children, 
    color=theme.colors.brand.blue,
    size=["50%", "50%"], 
    globSizes=[[40, 80], [60, 50], [20, 80]],
    globPositions=[[20, 10], [10, 20], [20, 15]],
    top, left, right, bottom, opacity = 1, speed, radius, rotate},
    ) => {
    return (
        <>
            <div className='blob' style={{
                top,
                left,
                right,
                bottom,
                width: size[0],
                height: size[1],
                opacity,
                transform: rotate ? `rotate(${rotate}deg)` : undefined
            }}>
                <div className='glob'
                    style={{
                        backgroundColor: color,
                        width: globSizes[0][0] + '%',
                        height: globSizes[0][1] + '%',
                        top: globPositions[0][0] + '%',
                        left: globPositions[0][1] + '%',
                        animation: speed ? `move ${speed * 1200}ms infinite alternate ease-in-out` : undefined,
                        borderRadius: radius
                    }}
                ></div>
                <div className='glob1' style={{
                    backgroundColor: color,
                    width: globSizes[1][0] + '%',
                    height: globSizes[1][1] + '%',
                    top: globPositions[1][0] + '%',
                    left: globPositions[1][1] + '%',
                    animation: speed ? `move ${speed * 1000}ms infinite alternate ease-in-out` : undefined,
                    borderRadius: radius
                }}></div>
                <div className='glob2' style={{
                    backgroundColor: color,
                    width: globSizes[2][0] + '%',
                    height: globSizes[2][1] + '%',
                    top: globPositions[2][0] + '%',
                    left: globPositions[2][1] + '%',
                    animation: speed ? `move ${speed * 800}ms infinite alternate ease-in-out` : undefined,
                    borderRadius: radius
                }}></div>
            </div>
            <svg className="glob-svg" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                    </filter>
                </defs>
            </svg>
            <svg className="glob-svg" viewBox="0 0 400 400">
                <defs>
                    <filter id="duotone-filter-post-one">
                        <feColorMatrix type="matrix" values="0.14453125 0 0 0 0.33203125 0.71875 0 0 0 0.27734375 -0.34765625 0 0 0 0.73046875 0 0 0 1 0"></feColorMatrix>
                    </filter>
                </defs>
            </svg>
        </>
    )
}

export default Glob;