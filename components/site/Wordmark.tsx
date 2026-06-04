"use client"

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react"
import React, { useCallback, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export const Wordmark = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-8 pt-8 lg:gap-12">
        {/* Logo SVG */}
        <div className="flex w-full items-center justify-center overflow-hidden">
          <div className="max-w-full">
            <MagicSVG
              className="h-auto w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl"
              gradientFrom="#E3A514"
              gradientSize={100}
              gradientTo="#B74677"
              height={149}
              strokeColor="#373840"
              width={1166}
            >
              <svg
                width="1166"
                height="150"
                viewBox="0 0 1166 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1032.19 4.0183V30.7879H1080.7V145.982H1115.79V30.7879H1164.31V4.0183H1032.19ZM1166 32.3723H1117.48V147.566H1079.01V32.3723H1030.5V2.43388H1166V32.3723Z"
                  fill="#27282D"
                />
                <path
                  d="M1027.44 104.406C1027.44 96.9702 1025.78 90.8189 1022.46 85.9517C1019.48 81.3886 1015.61 77.6565 1010.86 74.7571L1009.89 74.1892C1005.02 71.4006 999.64 69.1467 993.752 67.4276L992.567 67.0903C986.358 65.3327 980.077 63.7772 973.724 62.4252C969.067 61.4112 964.695 60.3973 960.607 59.3833L956.613 58.3698C951.415 57.0178 947.227 55.2598 944.051 53.0966C941.073 50.9418 939.491 48.1927 939.305 44.8496L939.287 44.1734C939.287 41.0638 940.226 38.3595 942.103 36.061C943.862 33.7796 946.701 31.9142 950.618 30.4645L951.416 30.1798C955.748 28.6927 961.306 27.9486 968.092 27.9486C974.879 27.9486 981.81 28.8951 988.885 30.7879C995.96 32.5455 1003.04 35.3173 1010.11 39.103L1020.94 14.1577C1014.31 10.2284 1006.72 7.25014 998.187 5.22209L996.467 4.82908C987.803 2.80107 979.012 1.7236 970.095 1.5968L968.309 1.58442C954.014 1.58446 942.101 3.61228 932.571 7.66834L931.699 8.03969C922.746 11.924 915.962 17.1415 911.346 23.6905C906.725 30.3151 904.415 37.6833 904.415 45.795C904.415 53.3664 906.004 59.5864 909.181 64.4537C912.502 69.3209 916.761 73.2417 921.959 76.2162C927.157 79.1906 932.861 81.6249 939.07 83.5178C945.423 85.4106 951.705 87.0336 957.913 88.3856C964.266 89.6024 970.043 90.9538 975.241 92.441C980.439 93.793 984.626 95.6185 987.803 97.9168C990.979 100.08 992.567 103.055 992.567 106.84C992.567 109.815 991.556 112.451 989.535 114.75L989.143 115.175C987.112 117.275 984.066 118.958 980.005 120.226L979.203 120.447C975.117 121.516 969.825 122.051 963.328 122.051V120.467C970.156 120.467 975.514 119.866 979.47 118.722C983.624 117.425 986.48 115.732 988.229 113.742C990.001 111.727 990.875 109.447 990.875 106.84C990.875 103.544 989.53 101.053 986.806 99.198L986.787 99.1841L986.768 99.1701C983.998 97.1656 980.335 95.5024 975.722 94.2188L974.788 93.9682L974.745 93.9558C970.249 92.6695 965.306 91.4833 959.913 90.397L957.575 89.9375L957.551 89.9328L957.53 89.9282C952.057 88.7365 946.531 87.3364 940.951 85.7289L938.556 85.028L938.547 85.0249C932.617 83.217 927.125 80.9208 922.08 78.1333L921.077 77.5685C915.995 74.6607 911.771 70.882 908.414 66.2455L907.755 65.3063L907.745 65.2939L907.737 65.28C904.353 60.095 902.723 53.5651 902.723 45.795C902.723 37.3837 905.125 29.7131 909.929 22.824L909.934 22.8178C914.908 15.7617 922.259 10.2421 931.882 6.22163C941.695 2.04733 953.861 4.14666e-05 968.309 0C977.977 0 987.501 1.09641 996.876 3.29108C1005.68 5.22519 1013.55 8.13332 1020.47 12.027L1021.85 12.8193L1023.04 13.5279L1010.95 41.3775L1009.27 40.4785C1002.74 36.9864 996.238 34.382 989.749 32.6539L988.452 32.3197L988.436 32.315L988.421 32.312C981.484 30.4562 974.709 29.533 968.092 29.533C961.42 29.5331 956.077 30.2662 951.998 31.6667C947.85 33.0908 945.085 34.9015 943.474 36.9894L943.459 37.0064L943.446 37.0234C941.812 39.0243 940.979 41.384 940.979 44.1734L940.994 44.7552C941.15 47.6225 942.478 49.9483 945.069 51.8294C948.031 53.8415 952.007 55.5269 957.066 56.8426C962.237 58.1877 967.918 59.5347 974.107 60.8826C980.493 62.2417 986.805 63.8043 993.046 65.5708C999.124 67.2522 1004.7 69.4843 1009.77 72.2721L1010.78 72.8369C1016.19 75.9368 1020.57 80.0285 1023.88 85.0976C1027.42 90.2834 1029.13 96.7536 1029.13 104.406L1029.12 105.181C1028.97 113.174 1026.49 120.523 1021.69 127.195C1016.72 134.113 1009.3 139.624 999.548 143.774L999.547 143.772C989.871 147.952 977.7 150 963.112 150C951.601 150 940.527 148.676 929.896 146.025L927.776 145.477L927.756 145.473C917.21 142.523 908.504 138.768 901.692 134.176L900.353 133.246L899.289 132.482L912.598 104.838L914.275 105.955C920.62 110.18 928.123 113.697 936.802 116.495C945.583 119.145 954.423 120.467 963.328 120.467V122.051L961.623 122.034C953.103 121.876 944.647 120.529 936.255 117.994C927.447 115.155 919.793 111.572 913.295 107.245L901.383 131.988C908.169 136.855 917.122 140.844 928.24 143.953C938.664 146.742 949.531 148.224 960.843 148.399L963.112 148.416C977.551 148.416 989.463 146.387 998.848 142.332C1008.08 138.402 1015.08 133.267 1019.84 126.927L1020.29 126.31C1024.91 119.892 1027.29 112.839 1027.43 105.152L1027.44 104.406Z"
                  fill="#27282D"
                />
                <path
                  d="M767.985 4.0183V145.982H885.377V119.618H802.857V86.7625H873.248V61.209H802.857V30.3825H882.561V4.0183H767.985ZM884.254 31.9669H804.549V59.6246H874.94V88.3469H804.549V118.033H887.069V147.566H766.293V2.43388H884.254V31.9669Z"
                  fill="#27282D"
                />
                <path
                  d="M629.655 4.0183V145.982H664.743V94.2668H734.918V67.9011H664.743V30.3825H744.231V4.0183H629.655ZM745.924 31.9669H666.436V66.3166H736.61V95.8512H666.436V147.566H627.963V2.43388H745.924V31.9669Z"
                  fill="#27282D"
                />
                <path
                  d="M489.822 4.0183H454.733V145.982H489.822V87.7759H558.697V145.982H593.784V4.0183H558.697V59.9913H489.822V4.0183ZM595.476 147.566H557.005V89.3604H491.514V147.566H453.041V2.43388H491.514V58.4069H557.005V2.43388H595.476V147.566Z"
                  fill="#27282D"
                />
                <path
                  d="M323.993 75C323.993 68.6625 325.008 62.8596 327.038 57.5915L327.458 56.544C329.913 51.0008 333.306 46.201 337.637 42.1449C341.698 38.3424 346.457 35.3715 351.914 33.2326L353.015 32.8164C358.935 30.6531 365.434 29.5717 372.509 29.5717L373.91 29.5872C380.882 29.7536 387.346 31.1681 393.302 33.8298C399.655 36.5339 405.43 40.6587 410.628 46.2019L433.154 26.7324C425.934 18.485 416.982 12.265 406.297 8.07373C396.085 3.88235 384.654 1.72153 372.003 1.59061L370.776 1.58442C358.935 1.58445 348.033 3.40979 338.07 7.06026L336.218 7.73643C327.021 11.2142 318.903 16.0591 311.864 22.2701C304.5 28.8949 298.724 36.6691 294.536 45.5923C290.493 54.5158 288.472 64.3189 288.472 75L288.495 76.9914C288.732 86.9021 290.746 96.0403 294.536 104.406C298.724 113.33 304.5 121.105 311.864 127.73C319.228 134.355 327.891 139.492 337.854 143.142C347.33 146.438 357.504 148.19 368.376 148.395L370.559 148.416C383.428 148.416 395.011 146.386 405.305 142.325L406.297 141.926C416.982 137.6 425.934 131.312 433.154 123.065L410.628 103.595C405.43 109.274 399.655 113.532 393.302 116.371L392.104 116.863C386.08 119.24 379.548 120.428 372.509 120.428V118.844C379.789 118.844 386.474 117.534 392.588 114.934C398.695 112.202 404.283 108.093 409.344 102.565L410.486 101.316L435.474 122.913L434.463 124.069C427.07 132.514 417.898 138.95 406.974 143.375L406.976 143.376C396.19 147.803 384.041 150 370.559 150C359.422 150 348.967 148.43 339.207 145.279L337.265 144.628L337.251 144.623L337.237 144.619C327.712 141.129 319.335 136.297 312.118 130.124L310.691 128.872C303.164 122.1 297.261 114.153 292.986 105.044L292.978 105.025C288.838 95.887 286.78 85.8717 286.78 75C286.78 64.128 288.838 54.1117 292.978 44.9734L292.986 44.9548C297.261 35.8456 303.164 27.8995 310.691 21.1282L310.702 21.1173C318.379 14.3441 327.308 9.16317 337.474 5.57642C347.648 1.85151 358.755 2.91788e-05 370.776 0C384.116 0 396.193 2.19639 406.976 6.62238C417.559 10.7776 426.495 16.8857 433.764 24.9407L434.463 25.7283L435.474 26.8825L410.502 48.4672L409.357 47.2463C404.613 42.1872 399.405 38.3753 393.74 35.7763L392.601 35.2719L392.586 35.2657L392.573 35.2595C386.462 32.5287 379.782 31.1562 372.509 31.1561C365.621 31.1561 359.334 32.2087 353.631 34.2925C347.921 36.3791 342.994 39.3698 338.834 43.2652C334.674 47.1602 331.407 51.7736 329.035 57.1211L328.63 58.1284C326.674 63.2037 325.685 68.8222 325.685 75L325.698 76.2285C325.83 82.319 326.945 87.8532 329.021 92.8479C331.395 98.2081 334.666 102.831 338.834 106.733C342.734 110.385 347.307 113.243 352.569 115.305L353.631 115.708C359.334 117.791 365.621 118.844 372.509 118.844V120.428L371.189 120.416C365.061 120.298 359.375 119.351 354.132 117.577L353.015 117.184C347.095 115.02 341.969 111.91 337.637 107.854C333.306 103.797 329.913 98.9976 327.458 93.4545C325.292 88.2575 324.142 82.526 324.006 76.2595L323.993 75Z"
                  fill="#27282D"
                />
                <path
                  d="M152.692 4.0183V145.982H270.083V119.618H187.563V86.7625H257.954V61.209H187.563V30.3825H267.268V4.0183H152.692ZM268.96 31.9669H189.255V59.6246H259.647V88.3469H189.255V118.033H271.776V147.566H150.999V2.43388H268.96V31.9669Z"
                  fill="#27282D"
                />
                <path
                  d="M1.69211 4.0183V30.7879H50.2081V145.982H85.2963V30.7879H133.812V4.0183H1.69211ZM135.504 32.3723H86.9884V147.566H48.516V32.3723H0V2.43388H135.504V32.3723Z"
                  fill="#27282D"
                />
              </svg>
            </MagicSVG>
          </div>
        </div>
      </div>
    </div>
  )
}

interface MagicSVGProps {
  children: React.ReactNode
  className?: string
  fill?: string
  gradientFrom?: string
  gradientSize?: number
  gradientTo?: string
  height: number
  strokeColor?: string
  strokeWidth?: number
  width: number
}

export function MagicSVG({
  children,
  width,
  height,
  className,
  gradientSize = 50,
  gradientFrom = "#E3A514",
  gradientTo = "#B74677",
  strokeWidth = 1,
  fill = "none",
  strokeColor = "#27282D",
}: MagicSVGProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  const animatedX = useMotionValue(-gradientSize * 2)
  const animatedY = useMotionValue(-gradientSize * 2)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (svgRef.current) {
        const { left, top } = svgRef.current.getBoundingClientRect()
        const clientX = e.clientX
        const clientY = e.clientY
        const newX = clientX - left
        const newY = clientY - top

        animate(animatedX, newX, {
          type: "spring",
          stiffness: 150,
          damping: 25,
          mass: 0.8,
        })

        animate(animatedY, newY, {
          type: "spring",
          stiffness: 150,
          damping: 25,
          mass: 0.8,
        })
      }
    },
    [animatedX, animatedY]
  )

  const handleMouseLeave = useCallback(() => {
    animate(animatedX, -gradientSize * 2, {
      type: "spring",
      stiffness: 100,
      damping: 30,
    })

    animate(animatedY, -gradientSize * 2, {
      type: "spring",
      stiffness: 100,
      damping: 30,
    })
  }, [animatedX, animatedY, gradientSize])

  const handleMouseEnter = useCallback(() => {
    document.addEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  useEffect(() => {
    const svgElement = svgRef.current
    if (svgElement) {
      svgElement.addEventListener("mouseenter", handleMouseEnter)
      svgElement.addEventListener("mouseleave", handleMouseLeave)
    }
    return () => {
      if (svgElement) {
        svgElement.removeEventListener("mouseenter", handleMouseEnter)
        svgElement.removeEventListener("mouseleave", handleMouseLeave)
      }
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [handleMouseEnter, handleMouseLeave, handleMouseMove])

  useEffect(() => {
    animatedX.set(-gradientSize * 2)
    animatedY.set(-gradientSize * 2)
  }, [gradientSize, animatedX, animatedY])

  const gradientId = "magic-gradient-wordmark"
  const maskId = "magic-mask-wordmark"

  return (
    <motion.svg
      aria-label="Magic SVG"
      className={cn("cursor-pointer transition-all duration-300", className)}
      fill="none"
      height={height}
      ref={svgRef}
      style={{ maxWidth: "100%", height: "auto" }}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Magic SVG</title>
      <defs>
        <motion.radialGradient
          cx={useMotionTemplate`${animatedX}px`}
          cy={useMotionTemplate`${animatedY}px`}
          gradientUnits="userSpaceOnUse"
          id={gradientId}
          r={gradientSize}
        >
          <stop offset="0%" stopColor={gradientFrom} />
          <stop offset="70%" stopColor={gradientTo} />
          <stop offset="100%" stopColor="transparent" />
        </motion.radialGradient>

        <mask id={maskId}>
          <rect fill="black" height="100%" width="100%" />
          <motion.circle
            cx={useMotionTemplate`${animatedX}px`}
            cy={useMotionTemplate`${animatedY}px`}
            fill="white"
            r={gradientSize}
          />
        </mask>
      </defs>

      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childType = (child as React.ReactElement).type
          if (
            childType === "defs" ||
            childType === "mask" ||
            childType === "clipPath"
          ) {
            return child
          }
        }
        return null
      })}

      <g>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const childType = (child as React.ReactElement).type
            if (
              childType !== "defs" &&
              childType !== "mask" &&
              childType !== "clipPath"
            ) {
              return React.cloneElement(
                child as React.ReactElement<React.SVGProps<SVGElement>>,
                {
                  stroke: strokeColor,
                  strokeWidth,
                  fill,
                }
              )
            }
          }
          return null
        })}
      </g>

      <g mask={`url(#${maskId})`}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const childType = (child as React.ReactElement).type
            if (
              childType !== "defs" &&
              childType !== "mask" &&
              childType !== "clipPath"
            ) {
              return React.cloneElement(
                child as React.ReactElement<React.SVGProps<SVGElement>>,
                {
                  stroke: `url(#${gradientId})`,
                  strokeWidth: strokeWidth + 1,
                  fill,
                }
              )
            }
          }
          return null
        })}
      </g>
    </motion.svg>
  )
}
