import React from "react";
import { countAwards, IAwardListObject } from "./PlayerPage/utils";
import makeEmojiResponsive from "../../lib/functions/makeEmojiResponsive";

interface AwardsProps {
  awards: ReturnType<typeof countAwards>;
}
interface AwardProps {
  list: IAwardListObject[];
  name: string;
  emoji: string;
}

function Award({ list, name, emoji }: AwardProps) {
  const Icon = makeEmojiResponsive(emoji, name);
  if (!list || !list.length) {
    return null;
  }
  return (
    <p>
      <span style={{ whiteSpace: "nowrap" }}>{name}</span>&nbsp;
      {list.map((_, i) => (
        <Icon key={i} />
      ))}
    </p>
  );
}
function Awards({ awards }: AwardsProps) {
  if (!awards) return null;
  return (
    <>
      <div className="awards">
        <Award name="MVP" list={awards.mvp} emoji="🏆" />
        {awards.rookie && (
          <p>
            Rookie of Year <span className="sub">({awards.rookie})</span>
          </p>
        )}
        <Award name="Hank Aron" list={awards.HankAaron} emoji="🎖" />
        <Award name="Silver Slugger" list={awards.SilverSlugger} emoji="🏅" />
      </div>
      <div className="awards">
        <Award name="All-Star" list={awards.AllStar} emoji="⭐" />
        <Award name="Cy Young" list={awards.CyYoung} emoji="⚾" />
      </div>
    </>
  );
}

export default Awards;
