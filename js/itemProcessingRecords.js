//----------------------------------=+=-----------------------------------------
//                          Year-Denom Name Generator
// The purpose of this function is to determine what the item's name is IF/WHEN
// there are multiple options for a denomination in the selected year.
function itemNameProcessing(year, denomination) {
    "use strict";
    // Declaring Constants
    const HALF_CENT = "half-cent";
    const CENT = "cent";
    const TWO_CENT = "two-cent";
    const THREE_CENT = "three-cent";
    const HALF_DIME = "half-dime";
    const DIME = "dime";
    const TWENTY_CENT = "twenty-cent";
    const QUARTER = "quarter";
    const HALF = "half";
    const DOLLAR = "dollar";

    console.log(year + denomination);
    // Declaring Variables
    let suggestedNames = [];
    
    // Half-Cents Determination
    if (denomination === HALF_CENT) {
        // Liberty Cap
        if (year >= 1793 && year <= 1797) {
            suggestedNames.push("LIBERTY CAP HALF CENT");
        }
        // Draped Bust
        if (year >= 1800 && year <= 1808) {
            suggestedNames.push("DRAPED BUST HALF CENT");
        }
        // Classic Head
        if (year >= 1809 && year <= 1836) {
            suggestedNames.push("CLASSIC HEAD HALF CENT");
        }
        // Braided Hair
        if (year >= 1840 && year <=1857) {
            suggestedNames.push("BRAIDED HAIR HALF CENT");
        }
    }

    // Cents Determination
    if (denomination === CENT) {
        // Flowing Hair
        if (year >= 1793 && year <= 1796) {
            suggestedNames.push("FLOWING HAIR LARGE CENT");
        }
        // Draped Bust
        if (year >= 1796 && year <= 1807) {
            suggestedNames.push("DRAPED BUST LARGE CENT");
        }
        // Classic Head
        if (year >= 1808 && year <= 1814) {
            suggestedNames.push("CLASSIC HEAD LARGE CENT");
        }
        // Coronet Head
        if (year >= 1816 && year <= 1839) {
            suggestedNames.push("CORONET HEAD LARGE CENT");
        }
        // Braided Hair
        if (year >= 1839 && year <= 1857) {
            suggestedNames.push("BRAIDED HAIR LARGE CENT");
        }
        // Flying Eagle
        if (year >= 1856 && year <= 1858) {
            suggestedNames.push("FLYING EAGLE CENT");
        }
        // Longacre (Indian Head)
        if (year >= 1859 && year <= 1909) {
            suggestedNames.push("INDIAN HEAD CENT");
        }
        // Lincoln Wheat
        if (year >= 1909 && year <= 1958) {
            suggestedNames.push("LINCOLN WHEAT CENT");
        }
        // Lincoln Cent (modern)
        if (year >= 1959) {
            suggestedNames.push("LINCOLN CENT");
        }

    }

    // Two-Cent Determination
    if (denomination === TWO_CENT) {
        if (year >= 1864 && year <= 1873) {
            suggestedNames.push("TWO CENT PIECE");
        }
    }

    // Three-Cent Determination
    if (denomination === THREE_CENT) {
        // Three Cent Silver
        if (year >= 1851 && year <= 1873) {
            suggestedNames.push("THREE CENT SILVER");
        }
        // Three Cent Nickel
        if (year >= 1865 && year <= 1889) {
            suggestedNames.push("THREE CENT NICKEL");
        }
    }

    // Five-Cent Determination
    if (denomination === HALF_DIME) {
        // Bust Half Dime
        if (year >= 1792 && year <= 1792) {
            suggestedNames.push("BUST HALF DIME");
        }
        // Flowing Hair Half Dime
        if (year >= 1794 && year <= 1795) {
            suggestedNames.push("FLOWING HAIR HALF DIME");
        }
        // Draped Bust Half Dime
        if (year >= 1796 && year <= 1805) {
            suggestedNames.push("DRAPED BUST HALF DIME");
        }
        // Capped Bust Half Dime
        if (year >= 1829 && year <= 1837) {
            suggestedNames.push("CAPPED BUST HALF DIME");
        }
        // Seated Liberty Half Dime
        if (year >= 1837 && year <= 1873) {
            suggestedNames.push("SEATED LIBERTY HALF DIME");
        }
        // Shield Nickel
        if (year >= 1866 && year <= 1883) {
            suggestedNames.push("SHIELD NICKEL");
        }
        // Liberty "V" Nickel
        if (year >= 1883 && year <= 1913) {
            suggestedNames.push("LIBERTY V NICKEL");
        }
        // Buffalo Nickel
        if (year >= 1913 && year <= 1938) {
            suggestedNames.push("BUFFALO NICKEL");
        }
        // Jefferson Nickel
        if (year >= 1938) {
            suggestedNames.push("JEFFERSON NICKEL");
        }
    }
    
    // Dime Determination
    if (denomination === DIME) {
        // Draped Bust Dime
        if (year >= 1797 && year <= 1807) {
            suggestedNames.push("DRAPED BUST DIME");
        }
        // Capped Bust Dime
        if (year >= 1809 && year <= 1837) {
            suggestedNames.push("CAPPED BUST DIME");
        }
        // Seated Liberty Dime
        if (year >= 1837 && year <= 1891) {
            suggestedNames.push("SEATED LIBERTY DIME");
        }
        // Barber Dime
        if (year >= 1892 && year <= 1916) {
            suggestedNames.push("BARBER DIME");
        }
        // Mercury Dime
        if (year >= 1916 && year <= 1945) {
            suggestedNames.push("MERCURY DIME");
        }
        // Roosevelt Dime
        if (year >= 1946) {
            suggestedNames.push("ROOSEVELT DIME");
        }
    }
    
    // 20 Cent Determination
    if (denomination === TWENTY_CENT) {
        if (year >= 1875 && year <= 1878) {
            suggestedNames.push("TWENTY CENT PIECE");
        }
    }

    // Quarter Determination
    if (denomination === QUARTER) {
        // Draped Bust 
        if (year >= 1796 && year <= 1807) {
            suggestedNames.push("DRAPED BUST QUARTER");
        }
        // Capped Bust
        if (year >= 1815 && year <= 1838) {
            suggestedNames.push("CAPPED BUST QUARTER");
        }
        // Seated Liberty
        if (year >= 1838 && year <= 1891) {
            suggestedNames.push("SEATED LIBERTY QUARTER");
        }
        // Barber Quarter
        if (year >= 1892 && year <= 1916) {
            suggestedNames.push("BARBER QUARTER");
        }
        // Standing Liberty
        if (year >= 1916 && year <= 1930) {
            suggestedNames.push("STANDING LIBERTY QUARTER");
        }
        // Washington
        if (year >= 1932 && year <= 1998) {
            suggestedNames.push("WASHINGTON QUARTER");
        }
        // Washington 50 States
        if (year >= 1999 && year <= 2008) {
            // 1999
            if (year == 1999) {
                suggestedNames.push("DELAWARE STATE QUARTER");
                suggestedNames.push("PENNSYLVANIA STATE QUARTER");
                suggestedNames.push("NEW JERSEY STATE QUARTER");
                suggestedNames.push("GEORGIA STATE QUARTER");
                suggestedNames.push("CONNECTICUT STATE QUARTER");
            }
            // 2000
            if (year == 2000) {
                suggestedNames.push("MASSACHUSETTS STATE QUARTER");
                suggestedNames.push("MARYLAND STATE QUARTER");
                suggestedNames.push("SOUTH CAROLINA STATE QUARTER");
                suggestedNames.push("NEW HAMPSHIRE STATE QUARTER");
                suggestedNames.push("VIRGINIA STATE QUARTER");
            }
            // 2001
            if (year == 2001) {
                suggestedNames.push("NEW YORK STATE QUARTER");
                suggestedNames.push("NORTH CAROLINA STATE QUARTER");
                suggestedNames.push("RHODE ISLAND STATE QUARTER");
                suggestedNames.push("VERMONT STATE QUARTER");
                suggestedNames.push("KENTUCKY STATE QUARTER");
            }
            // 2002
            if (year == 2002) {
                suggestedNames.push("TENNESSEE STATE QUARTER");
                suggestedNames.push("OHIO STATE QUARTER");
                suggestedNames.push("LOUISIANA STATE QUARTER");
                suggestedNames.push("INDIANA STATE QUARTER");
                suggestedNames.push("MISSISSIPPI STATE QUARTER");
            }
            // 2003
            if (year == 2003) {
                suggestedNames.push("ILLINOIS STATE QUARTER");
                suggestedNames.push("ALABAMA STATE QUARTER");
                suggestedNames.push("MAINE STATE QUARTER");
                suggestedNames.push("MISSOURI STATE QUARTER");
                suggestedNames.push("ARKANSAS STATE QUARTER");
            }
            // 2004
            if (year == 2004) {
                suggestedNames.push("MICHIGAN STATE QUARTER");
                suggestedNames.push("FLORIDA STATE QUARTER");
                suggestedNames.push("TEXAS STATE QUARTER");
                suggestedNames.push("IOWA STATE QUARTER");
                suggestedNames.push("WISCONSIN STATE QUARTER");
            }
            // 2005
            if (year == 2005) {
                suggestedNames.push("CALIFORNIA STATE QUARTER");
                suggestedNames.push("MINNESOTA STATE QUARTER");
                suggestedNames.push("OREGON STATE QUARTER");
                suggestedNames.push("KANSAS STATE QUARTER");
                suggestedNames.push("WEST VIRGINIA STATE QUARTER");
            }
            // 2006
            if (year == 2006) {
                suggestedNames.push("NEVADA STATE QUARTER");
                suggestedNames.push("NEBRASKA STATE QUARTER");
                suggestedNames.push("COLORADO STATE QUARTER");
                suggestedNames.push("NORTH DAKOTA STATE QUARTER");
                suggestedNames.push("SOUTH DAKOTA STATE QUARTER");
            }
            // 2007
            if (year == 2007) {
                suggestedNames.push("MONTANA STATE QUARTER");
                suggestedNames.push("WASHINGTON STATE QUARTER");
                suggestedNames.push("IDAHO STATE QUARTER");
                suggestedNames.push("WYOMING STATE QUARTER");
                suggestedNames.push("UTAH STATE QUARTER");
            }
            // 2008
            if (year == 2008) {
                suggestedNames.push("OKLAHOMA STATE QUARTER");
                suggestedNames.push("NEW MEXICO STATE QUARTER");
                suggestedNames.push("ARIZONA STATE QUARTER");
                suggestedNames.push("ALASKA STATE QUARTER");
                suggestedNames.push("HAWAII STATE QUARTER");
            }
            
            // Link to Continue: https://www.pcgs.com/coinfacts/category/twenty-cents-quarters/washington-50-states-quarters/type-1-clad-1999-2008/189280
        }
        // Washington Territories & DC
        if (year == 2009) {
            suggestedNames.push("DISTRICT OF COLUMBIA QUARTER");
            suggestedNames.push("PUERTO RICO QUARTER");
            suggestedNames.push("AMERICAN SAMOA QUARTER");
            suggestedNames.push("U.S. VIRGIN ISLANDS QUARTER");
            suggestedNames.push("NORTHERN MARIANA ISLANDS QUARTER");
            
    // ifStatements for each Option
        }
        // Washington America the Beautiful
        if (year >= 2010 && year <= 2021) {
            // 2010
            if (year == 2010) {
                suggestedNames.push("HOT SPRINGS QUARTER");
                suggestedNames.push("YELLOWSTONE QUARTER");
                suggestedNames.push("YOSEMITE QUARTER");
                suggestedNames.push("GRAND CANYON QUARTER");
                suggestedNames.push("MOUNT HOOD QUARTER");
            }
            // 2011
            if (year == 2011) {
                suggestedNames.push("GETTYSBURG QUARTER");
                suggestedNames.push("GLACIER QUARTER");
                suggestedNames.push("OLYMPIC QUARTER");
                suggestedNames.push("VICKSBURG QUARTER");
                suggestedNames.push("CHICKASAW QUARTER");
            }
            // 2012
            if (year == 2012) {
                suggestedNames.push("EL YUNQUE QUARTER");
                suggestedNames.push("CHACO CULTURE QUARTER");
                suggestedNames.push("ACADIA QUARTER");
                suggestedNames.push("HAWAII VOLCANOES QUARTER");
                suggestedNames.push("DENALI QUARTER");
            }
            // 2013
            if (year == 2013) {
                suggestedNames.push("WHITE MOUNTAIN QUARTER");
                suggestedNames.push("PERRY'S MEMORIAL QUARTER");
                suggestedNames.push("GREAT BASIN QUARTER");
                suggestedNames.push("FORT MCHENRY QUARTER");
                suggestedNames.push("MOUNT RUSHMORE QUARTER");
            }
            // 2014
            if (year == 2014) {
                suggestedNames.push("GREAT SMOKY MOUNTAINS QUARTER");
                suggestedNames.push("SHENANDOAH QUARTER");
                suggestedNames.push("ARCHES QUARTER");
                suggestedNames.push("GREAT SAND DUNES QUARTER");
                suggestedNames.push("EVERGLADES QUARTER");
            }
            // 2015
            if (year == 2015) {
                suggestedNames.push("HOMESTEAD QUARTER");
                suggestedNames.push("KISATCHIE QUARTER");
                suggestedNames.push("BLUE RIDGE PARKWAY QUARTER");
                suggestedNames.push("BOMBAY HOOK QUARTER");
                suggestedNames.push("SARATOGA QUARTER");
            }
            // 2016
            if (year == 2016) {
                suggestedNames.push("SHAWNEE QUARTER");
                suggestedNames.push("CUMBERLAND GAP QUARTER");
                suggestedNames.push("THEODORE ROOSEVELT QUARTER");
                suggestedNames.push("HARPERS FERRY QUARTER");
                suggestedNames.push("FORT MOULTRIE QUARTER");
            }
            // 2017
            if (year == 2017) {
                suggestedNames.push("EFFIGY MOUNDS QUARTER");
                suggestedNames.push("ELLIS ISLAND QUARTER");
                suggestedNames.push("OZARK QUARTER");
                suggestedNames.push("FREDERICK DOUGLASS QUARTER");
                suggestedNames.push("GEORGE ROGERS CLARK QUARTER");
            }
            // 2018
            if (year == 2018) {
                suggestedNames.push("PICTURED ROCKS QUARTER");
                suggestedNames.push("APOSTLE ISLANDS QUARTER");
                suggestedNames.push("VOYAGEURS QUARTER");
                suggestedNames.push("BLOCK ISLAND QUARTER");
                suggestedNames.push("CUMBERLAND ISLAND QUARTER");
            }
            // 2019
            if (year == 2019) {
                suggestedNames.push("LOWELL QUARTER");
                suggestedNames.push("AMERICAN MEMORIAL QUARTER");
                suggestedNames.push("SAN ANTONIO MISSIONS QUARTER");
                suggestedNames.push("WAR IN THE PACIFIC QUARTER");
                suggestedNames.push("FRANK CHURCH RIVER OF NO RETURN QUARTER");
            }
            // 2020
            if (year == 2020) {
                suggestedNames.push("AMERICAN SAMOA QUARTER");
                suggestedNames.push("TALLGRASS PRAIRIE QUARTER");
                suggestedNames.push("WEIR FARM QUARTER");
                suggestedNames.push("SALT RIVER BAY QUARTER");
                suggestedNames.push("MARSH-BILLINGS-ROCKEFELLER QUARTER");
            }
        }
        // Washington Crossing the Delaware
        if (year == 2021) {
            suggestedNames.push("WASHINGTON CROSSING THE DELAWARE QUARTER");
        }
        // American Women's Series
        if (year >= 2022 && year <= 2025) {
            // 2022
            if (year == 2022) {
                suggestedNames.push("MAYA ANGELOU QUARTER");
                suggestedNames.push("SALLY RIDE QUARTER");
                suggestedNames.push("WILMA MANKILLER QUARTER");
                suggestedNames.push("NINA OTERO-WARREN QUARTER");
                suggestedNames.push("ANNA MAY WONG QUARTER");
            }
            // 2023
            if (year == 2023) {
                suggestedNames.push("BESSIE COLEMAN QUARTER");
                suggestedNames.push("EDITH KANAKOʻOLE QUARTER");
                suggestedNames.push("ELEANOR ROOSEVELT QUARTER");
                suggestedNames.push("JOVITA IDAR QUARTER");
                suggestedNames.push("MARIA TALLCHIEF QUARTER");
            }
            if (year > 2023) {
                suggestedNames.push("UNKNOWN ITEM")
            }
        }
    }
    
    // Half Dollar Determinations
    if (denomination === HALF) {
        // Flowing Hair
        if (year >= 1794 && year <= 1795) {
            suggestedNames.push("FLOWING HAIR HALF");
        }
        // Draped Bust
        if (year >= 1796 && year <= 1807) {
            suggestedNames.push("DRAPED BUST HALF");
        }
        // Capped Bust, Lettered Edge
        if (year >= 1807 && year <= 1836) {
            suggestedNames.push("CAPPED BUST HALF, LETTERED EDGE");
        }
        // Draped Bust, Reeded Edge
        if (year >= 1836 && year <= 1839) {
            suggestedNames.push("CAPPED BUST HALF, REEDED EDGE");
        }
        // Seated Liberty
        if (year >= 1839 && year <= 1891 && year != 1853 && year != 1854 && year != 1855) {
            suggestedNames.push("SEATED LIBERTY HALF");
        }
        // Seated Liberty (ARROWS & RAYS)
        if (year == 1853) {
            suggestedNames.push("SEATED LIBERTY HALF, ARROWS & RAYS");
        }
        // Seated Liberty (Arrows)
        if (year >= 1854 && year <= 1855) {
            suggestedNames.push("SEATED LIBERTY HALF, ARROWS");
        }
        // Barber
        if (year >= 1892 && year <= 1915) {
            suggestedNames.push("BARBER HALF");
        }
        // Walking Liberty
        if (year >= 1916 && year <= 1947) {
            suggestedNames.push("WALKING LIBERTY HALF");
        }
        // Franklin
        if (year >= 1948 && year <= 1963) {
            suggestedNames.push("FRANKLIN HALF");
        }
        // Kennedy
        if (year >= 1964) {
            suggestedNames.push("KENNEDY HALF");
        }
        // ------------------------ COMMEMORATIVE HALFS --------------------------
        // Columbian Exposition
        if (year >= 1892 && year <= 1893) {
            suggestedNames.push("COLUMBIAN EXPO COMMEMORATIVE HALF");
        }
        // Panama-Pacific International Expo
        if (year == 1915) {
            suggestedNames.push("PANAMA-PACIFIC EXPO COMMEMORATIVE HALF");
        }
        // Illinois Centennial
        if (year == 1915) {
            suggestedNames.push("ILLINOIS CENTENNIAL COMMEMORATIVE HALF");
        }
        // Maine Centennial
        if (year == 1920) {
            suggestedNames.push("MAINE CENTENNIAL COMMEMORATIVE HALF");
        }
        // Pilgrim Tercentenary
        if (year >= 1920 && year <= 1921) {
            suggestedNames.push("PILGRIM TERCENTENARY COMMEMORATIVE HALF");
        }
        // Missouri & Alabama Centennial (1921 Coins)
        if (year == 1921) {
            suggestedNames.push("MISSOURI CENTENNIAL COMMEMORATIVE HALF");
            suggestedNames.push("ALABAMA CENTENNIAL COMMEMORATIVE HALF");
        }
        // Grant Memorial (1922)
        if (year == 1922) {
            suggestedNames.push("GRANT MEMORIAL COMMEMORATIVE HALF");
        }
        // Monroe Doctrine Centennial (1923)
        if (year == 1923) {
            suggestedNames.push("MONROE DOCTRINE CENTENNIAL COMMEMORATIVE HALF");
        }
        // Huguenot-Walloon Tercentenary (1924)
        if (year == 1924) {
            suggestedNames.push("HUGUENOT-WALLOON TERCENTENARY COMMEMORATIVE HALF");
        }
        // 1925 COMMEMORATIVEs
        if (year == 1925) {
            suggestedNames.push("LEXINGTON-CONCORD SESQUICENTENNIAL COMMEMORATIVE HALF");
            suggestedNames.push("STONE MOUNTAIN MEMORIAL COMMEMORATIVE HALF");
            suggestedNames.push("CALIFORNIA DIAMOND JUBILEE COMMEMORATIVE HALF");
            suggestedNames.push("FORT VANCOUVER CENTENNIAL COMMEMORATIVE HALF");
        }
        // Sesquicentennial of American Independence (1926)
        if (year == 1926) {
            suggestedNames.push("SESQUICENTENNIAL OF AMERICAN INDEPENDENCE COMMEMORATIVE HALF");
        }
        // ORegon Trail Memorial
        if (year >= 1926 && year <= 1939) {
            suggestedNames.push("OREGON TRAIL MEMORIAL COMMEMORATIVE HALF");
        }
        // Vermont Sesquicentennial (1927)
        if (year == 1927) {
            suggestedNames.push("VERMONT SESQUICENTENNIAL COMMEMORATIVE HALF");
        }
        // Hawaiian Sesquicentennial (1928)
        if (year == 1928) {
            suggestedNames.push("HAWAIIAN SESQUICENTENNIAL COMMEMORATIVE HALF");
        }
        // Maryland Tercentenary (1934)
        if (year >= 0 && year <= 0) {
            suggestedNames.push("X");
        }
        // Texas Independence & Daniel Boone (1934-1938)
        if (year >= 1934 && year <= 1938) {
            suggestedNames.push("TEXAS INDEPENDENCE CENTENNIAL COMMEMORATIVE HALF");
            suggestedNames.push("DANIEL BOONE BICENTENNIAL COMMEMORATIVE HALF");
        }
        // 1935 COMMEMORATIVEs
        if (year == 1935) {
            suggestedNames.push("CONNECTICUT TERCENTENARY COMMEMORATIVE HALF");
            suggestedNames.push("HUDSON SESQUICENTENNIAL COMMEMORATIVE HALF");
            suggestedNames.push("OLD SPANISH TRAIL COMMEMORATIVE HALF");
        }
        // Arkansas Centennial
        if (year >= 1935 && year <= 1939) {
            suggestedNames.push("ARKANSAS CENTENNIAL COMMEMORATIVE HALF");
        }
        // California-Pacific International Expo
        if (year >= 1935 && year <= 1936) {
            suggestedNames.push("CALIFORNIA-PACIFIC EXPO COMMEMORATIVE HALF");
        }
        // 1936 COMMEMORATIVEs
        if (year == 1936) {
            suggestedNames.push("RHODE ISLAND TERCENTENARY COMMEMORATIVE HALF");
            suggestedNames.push("CLEVELAND CENTENNIAL COMMEMORATIVE HALF");
            suggestedNames.push("WISCONSIN TERRITORIAL CENTENNIAL");
            suggestedNames.push("CINCINNATI MUSIC CENTER COMMEMORATIVE HALF");
            suggestedNames.push("LONG ISLAND TERCENTENARY COMMEMORATIVE HALF");
            suggestedNames.push("MAINE TERCENTENARY COMMEMORATIVE HALF");
            suggestedNames.push("CONNECTICUT CENTENNIAL COMMEMORATIVE HALF");
            suggestedNames.push("VIRGINIA SESQUICENTENNIAL COMMEMORATIVE HALF");
            suggestedNames.push("ILLINOIS CENTENNIAL COMMEMORATIVE HALF");
            suggestedNames.push("NEW YORK CHARTER COMMEMORATIVE HALF");
            suggestedNames.push("SAN FRANCISCO BAY BRIDGE OPENING COMMEMORATIVE HALF");
            suggestedNames.push("SOUTH CAROLINA SESQUICENTENNIAL COMMEMORATIVE HALF");
            suggestedNames.push("DELAWARE TERCENTENARY COMMEMORATIVE HALF");
            suggestedNames.push("BATTLE OF GETTYSBURG ANNIVERSARY COMMEMORATIVE HALF");
            suggestedNames.push("VIRGINIA BICENTENNIAL COMMEMORATIVE HALF");
        }
        // 1937 COMMEMORATIVEs
        if (year == 1937) {
            suggestedNames.push("ROANOKE ISLAND 350th ANNIVERSARY COMMEMORATIVE HALF");
            suggestedNames.push("BATTLE OF ANTIETAM ANNIVERSARY COMMEMORATIVE HALF");
        }
        // New York 250th Anniversary (1938)
        if (year == 1938) {
            suggestedNames.push("NEW YORK 250th ANNIVERSARY COMMEMORATIVE HALF");
        }
        // Iowa Centennial (1946)
        if (year == 1946) {
            suggestedNames.push("IOWA CENTENNIAL COMMEMORATIVE HALF");
        }
        // Booker T. Washington Memorial
        if (year >= 1946 && year <= 1951) {
            suggestedNames.push("BOOKER T. WASHINGTON MEMORIAL COMMEMORATIVE HALF");
        }
        // Carver/Washington COMMEMORATIVE
        if (year >= 1951 && year <= 1954) {
            suggestedNames.push("CARVER/WASHINGTON COMMEMORATIVE HALF");
        }
    }
    
    // Dollar Determinations
    if (denomination === DOLLAR) {
        // Flowing Hair
        if (year >= 1794 && year <= 1795) {
            suggestedNames.push("FLOWING HAIR DOLLAR");
        }
        // Draped Bust
        if (year >= 1795 && year <= 1804) {
            suggestedNames.push("DRAPED BUST DOLLAR");
        }
        // Liberty Seated
        if (year >= 1840 && year <= 1873) {
            suggestedNames.push("LIBERTY SEATED DOLLAR");
        }
        // Trade Dollar
        if (year >= 1873 && year <= 1885) {
            suggestedNames.push("TRADE DOLLAR");
        }
        // Morgan
        if (year >= 1878 && year <= 1921) {
            suggestedNames.push("MORGAN DOLLAR");
        }
        // Peace
        if (year >= 1921 && year <= 1935) {
            suggestedNames.push("PEACE DOLLAR");
        }
        // Eisenhower
        if (year >= 1971 && year <= 1978) {
            suggestedNames.push("IKE DOLLAR");
        }
        // Susan B. Anthony
        if (year >= 1979 && year <= 1999) {
            suggestedNames.push("SUSAN B. ANTHONY DOLLAR");
        }
        // Sacagawea
        if (year >= 2000 && year <= 2008) {
            suggestedNames.push("SACAGAWEA DOLLAR");
        }
        // Presidential
        if (year >= 2007 && year <= 2016) {
            suggestedNames.push("PRESIDENTIAL DOLLAR");
        }
        // Native American
        if (year >= 2009) {
            suggestedNames.push("NATIVE AMERICAN DOLLAR");
        }
        // American Innovation
        if (year >= 2018) {
            suggestedNames.push("AMERICAN INNOVATION DOLLAR");
        }
        
        // Gold Dollars !!!!!
        // Liberty Head
        if (year >= 1849 && year <= 1854) {
            suggestedNames.push("LIBERTY HEAD GOLD $1");
        }
        // Indian Princess Head, small head variety
        if (year >= 1854 && year <= 1856) {
            suggestedNames.push("INDIAN PRINCESS SMALL HEAD, GOLD $1");
        }
        // Indian Princess Head, Large head variety
        if (year >= 1856 && year <= 1889) {
            suggestedNames.push("INDIAN PRINCESS LARGE HEAD, GOLD $1");
        }
        
    }

    // 2.5 Dollar Determinations
    if (denomination === DOLLAR) {
        // NAME
        if (year >= 0 && year <= 0) {
            suggestedNames.push("X");
        }
    }
    
    // $5 Dollar Determinations
    if (denomination === DOLLAR) {
        // NAME
        if (year >= 0 && year <= 0) {
            suggestedNames.push("X");
        }
    }

    // $10 Dollar Determinations
    if (denomination === DOLLAR) {
        // NAME
        if (year >= 0 && year <= 0) {
            suggestedNames.push("X");
        }
    }

    // $20 Dollar Determinations
    if (denomination === DOLLAR) {
        // NAME
        if (year >= 0 && year <= 0) {
            suggestedNames.push("X");
        }
    }

    // Returning Array of Potential Names (Validation for single return)
    if (suggestedNames.length > 1) {
        return suggestedNames;
    } else if (suggestedNames.length === 1) {
        return suggestedNames[0];
    } else if (suggestedNames.length === 0) {
        return "[NO ITEM FOUND]"
    }
    
}