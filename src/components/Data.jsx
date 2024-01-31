import React, { useState, useEffect } from "react";

const Data = (props) => {
  const [list, setList] = useState(() => {
    const storedList = localStorage.getItem("articleList");
    return storedList
      ? JSON.parse(storedList)
      : [
          {
            title: "UNFAIR-TRADE",
            content:
              "The well-known political, economic, and cultural revolutions that inaugurated capitalist modernity, we ought to add a fourth: a pharmacological revolution, one that began innocently enough with a variety of foreign substances — coffee, tea, chocolate — and culminated in a multi-billion dollar regulatory regime responsible for adapting subjects to their alienating conditions of existence. Forget “the opium of the people”: actual drugs have done and are doing more to prop up an increasingly delegitimized system than any mere ideology.Like broader cultural developments, the history of drugs offers a unique lens through which to glimpse the inner workings of capitalism, and specifically the demands it makes on its human subjects. Perhaps no drug more revealingly illustrates this claim than coffee, a stimulant uniquely and consistently praised by the ruling class since its introduction to the west. The drive for surplus-value has intimately shaped coffee production and consumption, and coffee consumption has molded subjects capable of navigating the stresses of the modern working day. Coursing through the veins of the modern world and the modern subject alike, coffee is the spirit of capitalism in brewed form. Its past is conjoined to the rise of bourgeois entrepreneurialism, and its future is as dark as contemporary society’s own horizon",
            author: "Benjamin Y. Fong",
          },
          {
            title: "HANGING-ON-THE-TELEPHONE",
            content:
              "I  got a frankly rude notification on my phone recently, telling me that my screen time had increased precipitously in the past weeks. Collectively, we have found ourselves in the midst of medically necessary self-imposed isolation during an era when more people are living alone than at quite possibly any point in human history. It’s difficult to quantify this kind of thing, but the percentage of American adults living alone has more than doubled in the past 50 years, taking a sharp leap after steadily rising throughout recorded history. That makes all of us, especially while limited to our homes, overwhelmingly reliant on one particular possession above all others: our cell phones. According to Pew, 96 percent of Americans have mobile phones, 81 percent of us smartphones. And telecommunications companies are reporting surges in usage since the coronavirus pandemic hit.",
            author: "Shuja Haider",
          },
          {
            title: "We-will-never-find-dignity-in-air-travel",
            content:
              "In arson investigations, there is something called “the area of confidence.” As I understand it, the area of confidence is the patch of ground where the detectives believe the fire started. The terminology is a bit arcane, it seems like — very much one of those phrases used only by fully immersed experts, people who have not needed to stop and explain what they mean for a very long time. It’s hard to work out why they decided to call it that. Do they mean that this is the part of the investigation where the detectives need to be extra confident, because here is where it gets even more difficult, or do they mean that this is the only thing they are confident about in a situation that is otherwise characterized by abiding uncertainty? I hope it’s the second one, because that interpretation offers more opportunities to completely run this metaphor into the ground, but I don’t know any fire detectives and so have no one to ask.",
            author: "Rosa Lyster",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("articleList", JSON.stringify(list));
  }, [list]);

  return <>{props.children({ list, setList })}</>;
};

export default Data;
