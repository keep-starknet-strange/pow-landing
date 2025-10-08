'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface TraitOption {
  id: string;
  name: string;
  path: string;
}

interface NounsBuilderProps {
  className?: string;
  showPreviewOnly?: boolean;
  selectedTraits?: {
    head: string;
    body: string;
    glasses: string;
    background: string;
    accessories: string;
  };
  onTraitSelect?: (traitType: string, traitPath: string) => void;
  activeTab?: 'head' | 'body' | 'glasses' | 'accessories';
  onTabChange?: (tab: 'head' | 'body' | 'glasses' | 'accessories') => void;
  onTraitOptionsLoaded?: (options: {
    heads: TraitOption[];
    bodies: TraitOption[];
    glasses: TraitOption[];
    backgrounds: TraitOption[];
    accessories: TraitOption[];
  }) => void;
}

export default function NounsBuilder({ 
  className = '', 
  showPreviewOnly = false,
  selectedTraits: externalSelectedTraits,
  onTraitSelect: externalOnTraitSelect,
  activeTab: externalActiveTab,
  onTabChange: externalOnTabChange,
  onTraitOptionsLoaded
}: NounsBuilderProps) {
  const [internalSelectedTraits, setInternalSelectedTraits] = useState({
    head: '',
    body: '',
    glasses: '',
    background: '',
    accessories: ''
  });

  const [internalActiveTab, setInternalActiveTab] = useState<'head' | 'body' | 'glasses' | 'accessories'>('head');

  // Use external state if provided, otherwise use internal state
  const selectedTraits = externalSelectedTraits || internalSelectedTraits;
  const activeTab = externalActiveTab || internalActiveTab;

  const [traitOptions, setTraitOptions] = useState<{
    heads: TraitOption[];
    bodies: TraitOption[];
    glasses: TraitOption[];
    backgrounds: TraitOption[];
    accessories: TraitOption[];
  }>({
    heads: [],
    bodies: [],
    glasses: [],
    backgrounds: [],
    accessories: []
  });

  // Load trait options on component mount
  useEffect(() => {
    const loadTraitOptions = async () => {
      try {
        // Load all available traits from the actual folders
        
        const heads: TraitOption[] = [
          { id: '0', name: 'Aardvark', path: '/nouns-traits/Heads/0-head-aardvark.png' },
          { id: '1', name: 'Abstract', path: '/nouns-traits/Heads/1-head-abstract.png' },
          { id: '2', name: 'Ape', path: '/nouns-traits/Heads/2-head-ape.png' },
          { id: '3', name: 'Bag', path: '/nouns-traits/Heads/3-head-bag.png' },
          { id: '4', name: 'Bagpipe', path: '/nouns-traits/Heads/4-head-bagpipe.png' },
          { id: '5', name: 'Banana', path: '/nouns-traits/Heads/5-head-banana.png' },
          { id: '6', name: 'Bank', path: '/nouns-traits/Heads/6-head-bank.png' },
          { id: '7', name: 'Baseball Gameball', path: '/nouns-traits/Heads/7-head-baseball-gameball.png' },
          { id: '8', name: 'Basketball', path: '/nouns-traits/Heads/8-head-basketball.png' },
          { id: '9', name: 'Bat', path: '/nouns-traits/Heads/9-head-bat.png' },
          { id: '10', name: 'Bear', path: '/nouns-traits/Heads/10-head-bear.png' },
          { id: '11', name: 'Beer', path: '/nouns-traits/Heads/11-head-beer.png' },
          { id: '12', name: 'Beet', path: '/nouns-traits/Heads/12-head-beet.png' },
          { id: '13', name: 'Bell', path: '/nouns-traits/Heads/13-head-bell.png' },
          { id: '14', name: 'Bigfoot Yeti', path: '/nouns-traits/Heads/14-head-bigfoot-yeti.png' },
          { id: '15', name: 'Bigfoot', path: '/nouns-traits/Heads/15-head-bigfoot.png' },
          { id: '16', name: 'Blackhole', path: '/nouns-traits/Heads/16-head-blackhole.png' },
          { id: '17', name: 'Blueberry', path: '/nouns-traits/Heads/17-head-blueberry.png' },
          { id: '18', name: 'Bomb', path: '/nouns-traits/Heads/18-head-bomb.png' },
          { id: '19', name: 'Bonsai', path: '/nouns-traits/Heads/19-head-bonsai.png' },
          { id: '20', name: 'Boombox', path: '/nouns-traits/Heads/20-head-boombox.png' },
          { id: '21', name: 'Boot', path: '/nouns-traits/Heads/21-head-boot.png' },
          { id: '22', name: 'Box', path: '/nouns-traits/Heads/22-head-box.png' },
          { id: '23', name: 'Boxing Glove', path: '/nouns-traits/Heads/23-head-boxingglove.png' },
          { id: '24', name: 'Brain', path: '/nouns-traits/Heads/24-head-brain.png' },
          { id: '25', name: 'Bubble Speech', path: '/nouns-traits/Heads/25-head-bubble-speech.png' },
          { id: '26', name: 'Bubblegum', path: '/nouns-traits/Heads/26-head-bubblegum.png' },
          { id: '27', name: 'Burger Dollar Menu', path: '/nouns-traits/Heads/27-head-burger-dollarmenu.png' },
          { id: '28', name: 'Cake', path: '/nouns-traits/Heads/28-head-cake.png' },
          { id: '29', name: 'Calculator', path: '/nouns-traits/Heads/29-head-calculator.png' },
          { id: '30', name: 'Calendar', path: '/nouns-traits/Heads/30-head-calendar.png' },
          { id: '31', name: 'Camcorder', path: '/nouns-traits/Heads/31-head-camcorder.png' },
          { id: '32', name: 'Canned Ham', path: '/nouns-traits/Heads/32-head-cannedham.png' },
          { id: '33', name: 'Car', path: '/nouns-traits/Heads/33-head-car.png' },
          { id: '34', name: 'Cash Register', path: '/nouns-traits/Heads/34-head-cash-register.png' },
          { id: '35', name: 'Cassette Tape', path: '/nouns-traits/Heads/35-head-cassettetape.png' },
          { id: '36', name: 'Cat', path: '/nouns-traits/Heads/36-head-cat.png' },
          { id: '37', name: 'CD', path: '/nouns-traits/Heads/37-head-cd.png' },
          { id: '38', name: 'Chain', path: '/nouns-traits/Heads/38-head-chain.png' },
          { id: '39', name: 'Chainsaw', path: '/nouns-traits/Heads/39-head-chainsaw.png' },
          { id: '40', name: 'Chameleon', path: '/nouns-traits/Heads/40-head-chameleon.png' },
          { id: '41', name: 'Chart Bars', path: '/nouns-traits/Heads/41-head-chart-bars.png' },
          { id: '42', name: 'Cheese', path: '/nouns-traits/Heads/42-head-cheese.png' },
          { id: '43', name: 'Chef Hat', path: '/nouns-traits/Heads/43-head-chefhat.png' },
          { id: '44', name: 'Cherry', path: '/nouns-traits/Heads/44-head-cherry.png' },
          { id: '100', name: 'Hardhat', path: '/nouns-traits/Heads/100-head-hardhat.png' },
          { id: '101', name: 'Heart', path: '/nouns-traits/Heads/101-head-heart.png' },
          { id: '102', name: 'Helicopter', path: '/nouns-traits/Heads/102-head-helicopter.png' },
          { id: '103', name: 'High Heel', path: '/nouns-traits/Heads/103-head-highheel.png' },
          { id: '104', name: 'Hockey Puck', path: '/nouns-traits/Heads/104-head-hockeypuck.png' },
          { id: '105', name: 'Horse Deep Fried', path: '/nouns-traits/Heads/105-head-horse-deepfried.png' },
          { id: '106', name: 'Hotdog', path: '/nouns-traits/Heads/106-head-hotdog.png' },
          { id: '107', name: 'House', path: '/nouns-traits/Heads/107-head-house.png' },
          { id: '108', name: 'Ice Pop B', path: '/nouns-traits/Heads/108-head-icepop-b.png' },
          { id: '109', name: 'Igloo', path: '/nouns-traits/Heads/109-head-igloo.png' },
          { id: '110', name: 'Island', path: '/nouns-traits/Heads/110-head-island.png' },
          { id: '111', name: 'Jellyfish', path: '/nouns-traits/Heads/111-head-jellyfish.png' },
          { id: '112', name: 'Jupiter', path: '/nouns-traits/Heads/112-head-jupiter.png' },
          { id: '113', name: 'Kangaroo', path: '/nouns-traits/Heads/113-head-kangaroo.png' },
          { id: '114', name: 'Ketchup', path: '/nouns-traits/Heads/114-head-ketchup.png' },
          { id: '115', name: 'Laptop', path: '/nouns-traits/Heads/115-head-laptop.png' },
          { id: '116', name: 'Lightning Bolt', path: '/nouns-traits/Heads/116-head-lightning-bolt.png' },
          { id: '117', name: 'Lint', path: '/nouns-traits/Heads/117-head-lint.png' },
          { id: '118', name: 'Lips', path: '/nouns-traits/Heads/118-head-lips.png' },
          { id: '119', name: 'Lipstick 2', path: '/nouns-traits/Heads/119-head-lipstick2.png' },
          { id: '120', name: 'Lock', path: '/nouns-traits/Heads/120-head-lock.png' },
          { id: '121', name: 'Macaroni', path: '/nouns-traits/Heads/121-head-macaroni.png' },
          { id: '122', name: 'Mailbox', path: '/nouns-traits/Heads/122-head-mailbox.png' },
          { id: '123', name: 'Maze', path: '/nouns-traits/Heads/123-head-maze.png' },
          { id: '124', name: 'Microwave', path: '/nouns-traits/Heads/124-head-microwave.png' },
          { id: '125', name: 'Milk', path: '/nouns-traits/Heads/125-head-milk.png' },
          { id: '126', name: 'Mirror', path: '/nouns-traits/Heads/126-head-mirror.png' },
          { id: '127', name: 'Mixer', path: '/nouns-traits/Heads/127-head-mixer.png' },
          { id: '128', name: 'Moon', path: '/nouns-traits/Heads/128-head-moon.png' },
          { id: '129', name: 'Moose', path: '/nouns-traits/Heads/129-head-moose.png' },
          { id: '130', name: 'Mosquito', path: '/nouns-traits/Heads/130-head-mosquito.png' },
          { id: '131', name: 'Mountain Snowcap', path: '/nouns-traits/Heads/131-head-mountain-snowcap.png' },
          { id: '132', name: 'Mouse', path: '/nouns-traits/Heads/132-head-mouse.png' },
          { id: '133', name: 'Mug', path: '/nouns-traits/Heads/133-head-mug.png' },
          { id: '134', name: 'Mushroom', path: '/nouns-traits/Heads/134-head-mushroom.png' },
          { id: '135', name: 'Mustard', path: '/nouns-traits/Heads/135-head-mustard.png' },
          { id: '136', name: 'Nigiri', path: '/nouns-traits/Heads/136-head-nigiri.png' },
          { id: '137', name: 'Noodles', path: '/nouns-traits/Heads/137-head-noodles.png' },
          { id: '138', name: 'Onion', path: '/nouns-traits/Heads/138-head-onion.png' },
          { id: '139', name: 'Orangutan', path: '/nouns-traits/Heads/139-head-orangutan.png' },
          { id: '140', name: 'Orca', path: '/nouns-traits/Heads/140-head-orca.png' },
          { id: '141', name: 'Otter', path: '/nouns-traits/Heads/141-head-otter.png' },
          { id: '142', name: 'Outlet', path: '/nouns-traits/Heads/142-head-outlet.png' },
          { id: '143', name: 'Owl', path: '/nouns-traits/Heads/143-head-owl.png' },
          { id: '144', name: 'Oyster', path: '/nouns-traits/Heads/144-head-oyster.png' },
          { id: '145', name: 'Paintbrush', path: '/nouns-traits/Heads/145-head-paintbrush.png' },
          { id: '146', name: 'Panda', path: '/nouns-traits/Heads/146-head-panda.png' },
          { id: '147', name: 'Paperclip', path: '/nouns-traits/Heads/147-head-paperclip.png' },
          { id: '148', name: 'Peanut', path: '/nouns-traits/Heads/148-head-peanut.png' },
          { id: '149', name: 'Pencil Tip', path: '/nouns-traits/Heads/149-head-pencil-tip.png' },
          { id: '150', name: 'Peyote', path: '/nouns-traits/Heads/150-head-peyote.png' },
          { id: '151', name: 'Piano', path: '/nouns-traits/Heads/151-head-piano.png' },
          { id: '152', name: 'Pickle', path: '/nouns-traits/Heads/152-head-pickle.png' },
          { id: '153', name: 'Pie', path: '/nouns-traits/Heads/153-head-pie.png' },
          { id: '154', name: 'Piggy Bank', path: '/nouns-traits/Heads/154-head-piggybank.png' },
          { id: '155', name: 'Pill', path: '/nouns-traits/Heads/155-head-pill.png' },
          { id: '156', name: 'Pillow', path: '/nouns-traits/Heads/156-head-pillow.png' },
          { id: '157', name: 'Pineapple', path: '/nouns-traits/Heads/157-head-pineapple.png' },
          { id: '158', name: 'Pipe', path: '/nouns-traits/Heads/158-head-pipe.png' },
          { id: '159', name: 'Pirate Ship', path: '/nouns-traits/Heads/159-head-pirateship.png' },
          { id: '160', name: 'Pizza', path: '/nouns-traits/Heads/160-head-pizza.png' },
          { id: '161', name: 'Plane', path: '/nouns-traits/Heads/161-head-plane.png' },
          { id: '162', name: 'Pop', path: '/nouns-traits/Heads/162-head-pop.png' },
          { id: '163', name: 'Pork Bao', path: '/nouns-traits/Heads/163-head-porkbao.png' },
          { id: '164', name: 'Potato', path: '/nouns-traits/Heads/164-head-potato.png' },
          { id: '165', name: 'Pufferfish', path: '/nouns-traits/Heads/165-head-pufferfish.png' },
          { id: '166', name: 'Pumpkin', path: '/nouns-traits/Heads/166-head-pumpkin.png' },
          { id: '167', name: 'Pyramid', path: '/nouns-traits/Heads/167-head-pyramid.png' },
          { id: '168', name: 'Queen Crown', path: '/nouns-traits/Heads/168-head-queencrown.png' },
          { id: '169', name: 'Rabbit', path: '/nouns-traits/Heads/169-head-rabbit.png' },
          { id: '170', name: 'Rainbow', path: '/nouns-traits/Heads/170-head-rainbow.png' },
          { id: '171', name: 'Rangefinder', path: '/nouns-traits/Heads/171-head-rangefinder.png' },
          { id: '172', name: 'Raven', path: '/nouns-traits/Heads/172-head-raven.png' },
          { id: '173', name: 'Retainer', path: '/nouns-traits/Heads/173-head-retainer.png' },
          { id: '174', name: 'RGB', path: '/nouns-traits/Heads/174-head-rgb.png' },
          { id: '175', name: 'Ring', path: '/nouns-traits/Heads/175-head-ring.png' },
          { id: '176', name: 'Road', path: '/nouns-traits/Heads/176-head-road.png' },
          { id: '177', name: 'Robot', path: '/nouns-traits/Heads/177-head-robot.png' },
          { id: '178', name: 'Rock', path: '/nouns-traits/Heads/178-head-rock.png' },
          { id: '179', name: 'Rosebud', path: '/nouns-traits/Heads/179-head-rosebud.png' },
          { id: '180', name: 'Ruler Triangular', path: '/nouns-traits/Heads/180-head-ruler-triangular.png' },
          { id: '181', name: 'Saguaro', path: '/nouns-traits/Heads/181-head-saguaro.png' },
          { id: '182', name: 'Sailboat', path: '/nouns-traits/Heads/182-head-sailboat.png' },
          { id: '183', name: 'Sandwich', path: '/nouns-traits/Heads/183-head-sandwich.png' },
          { id: '184', name: 'Saturn', path: '/nouns-traits/Heads/184-head-saturn.png' },
          { id: '185', name: 'Saw', path: '/nouns-traits/Heads/185-head-saw.png' },
          { id: '186', name: 'Scorpion', path: '/nouns-traits/Heads/186-head-scorpion.png' },
          { id: '187', name: 'Shark', path: '/nouns-traits/Heads/187-head-shark.png' },
          { id: '188', name: 'Shower', path: '/nouns-traits/Heads/188-head-shower.png' },
          { id: '189', name: 'Skateboard', path: '/nouns-traits/Heads/189-head-skateboard.png' },
          { id: '190', name: 'Skeleton Hat', path: '/nouns-traits/Heads/190-head-skeleton-hat.png' },
          { id: '191', name: 'Ski Lift', path: '/nouns-traits/Heads/191-head-skilift.png' },
          { id: '192', name: 'Smile', path: '/nouns-traits/Heads/192-head-smile.png' },
          { id: '193', name: 'Snow Globe', path: '/nouns-traits/Heads/193-head-snowglobe.png' },
          { id: '194', name: 'Snowmobile', path: '/nouns-traits/Heads/194-head-snowmobile.png' },
          { id: '195', name: 'Spaghetti', path: '/nouns-traits/Heads/195-head-spaghetti.png' },
          { id: '196', name: 'Sponge', path: '/nouns-traits/Heads/196-head-sponge.png' },
          { id: '197', name: 'Squid', path: '/nouns-traits/Heads/197-head-squid.png' },
          { id: '198', name: 'Stapler', path: '/nouns-traits/Heads/198-head-stapler.png' },
          { id: '199', name: 'Star Sparkles', path: '/nouns-traits/Heads/199-head-star-sparkles.png' },
          { id: '200', name: 'Steak', path: '/nouns-traits/Heads/200-head-steak.png' },
          { id: '201', name: 'Sunset', path: '/nouns-traits/Heads/201-head-sunset.png' },
          { id: '202', name: 'Taco Classic', path: '/nouns-traits/Heads/202-head-taco-classic.png' },
          { id: '203', name: 'Taxi', path: '/nouns-traits/Heads/203-head-taxi.png' },
          { id: '204', name: 'Thumbs Up', path: '/nouns-traits/Heads/204-head-thumbsup.png' },
          { id: '205', name: 'Toaster', path: '/nouns-traits/Heads/205-head-toaster.png' },
          { id: '206', name: 'Toilet Paper Full', path: '/nouns-traits/Heads/206-head-toiletpaper-full.png' },
          { id: '207', name: 'Tooth', path: '/nouns-traits/Heads/207-head-tooth.png' },
          { id: '208', name: 'Toothbrush Fresh', path: '/nouns-traits/Heads/208-head-toothbrush-fresh.png' },
          { id: '209', name: 'Tornado', path: '/nouns-traits/Heads/209-head-tornado.png' },
          { id: '210', name: 'Trash Can', path: '/nouns-traits/Heads/210-head-trashcan.png' },
          { id: '211', name: 'Turing', path: '/nouns-traits/Heads/211-head-turing.png' },
          { id: '212', name: 'UFO', path: '/nouns-traits/Heads/212-head-ufo.png' },
          { id: '213', name: 'Undead', path: '/nouns-traits/Heads/213-head-undead.png' },
          { id: '214', name: 'Unicorn', path: '/nouns-traits/Heads/214-head-unicorn.png' },
          { id: '215', name: 'Vent', path: '/nouns-traits/Heads/215-head-vent.png' },
          { id: '216', name: 'Void', path: '/nouns-traits/Heads/216-head-void.png' },
          { id: '217', name: 'Volcano', path: '/nouns-traits/Heads/217-head-volcano.png' },
          { id: '218', name: 'Volleyball', path: '/nouns-traits/Heads/218-head-volleyball.png' },
          { id: '219', name: 'Wall', path: '/nouns-traits/Heads/219-head-wall.png' },
          { id: '220', name: 'Wallet', path: '/nouns-traits/Heads/220-head-wallet.png' },
          { id: '221', name: 'Wall Safe', path: '/nouns-traits/Heads/221-head-wallsafe.png' },
          { id: '222', name: 'Washing Machine', path: '/nouns-traits/Heads/222-head-washingmachine.png' },
          { id: '223', name: 'Watch', path: '/nouns-traits/Heads/223-head-watch.png' },
          { id: '224', name: 'Watermelon', path: '/nouns-traits/Heads/224-head-watermelon.png' },
          { id: '225', name: 'Wave', path: '/nouns-traits/Heads/225-head-wave.png' },
          { id: '226', name: 'Weed', path: '/nouns-traits/Heads/226-head-weed.png' },
          { id: '227', name: 'Weight', path: '/nouns-traits/Heads/227-head-weight.png' },
          { id: '228', name: 'Werewolf', path: '/nouns-traits/Heads/228-head-werewolf.png' },
          { id: '229', name: 'Whale Alive', path: '/nouns-traits/Heads/229-head-whale-alive.png' },
          { id: '230', name: 'Whale', path: '/nouns-traits/Heads/230-head-whale.png' },
          { id: '231', name: 'Wine', path: '/nouns-traits/Heads/231-head-wine.png' },
          { id: '232', name: 'Wizard Hat', path: '/nouns-traits/Heads/232-head-wizardhat.png' },
          { id: '233', name: 'Zebra', path: '/nouns-traits/Heads/233-head-zebra.png' },
          { id: '234', name: 'Capybara', path: '/nouns-traits/Heads/234-head-capybara.png' },
          { id: '235', name: 'Couch', path: '/nouns-traits/Heads/235-head-couch.png' },
          { id: '236', name: 'Hanger', path: '/nouns-traits/Heads/236-head-hanger.png' },
          { id: '237', name: 'Index Card', path: '/nouns-traits/Heads/237-head-index-card.png' },
          { id: '238', name: 'Snowman', path: '/nouns-traits/Heads/238-head-snowman.png' },
          { id: '239', name: 'Treasure Chest', path: '/nouns-traits/Heads/239-head-treasurechest.png' },
          { id: '240', name: 'Vending Machine', path: '/nouns-traits/Heads/240-head-vending-machine.png' },
          { id: '241', name: 'Wine Barrel', path: '/nouns-traits/Heads/241-head-wine-barrel.png' },
          { id: '242', name: 'Backpack', path: '/nouns-traits/Heads/242-head-backpack.png' },
          { id: '243', name: 'Beanie', path: '/nouns-traits/Heads/243-head-beanie.png' },
          { id: '244', name: 'Beluga', path: '/nouns-traits/Heads/244-head-beluga.png' },
          { id: '245', name: 'Cotton Candy', path: '/nouns-traits/Heads/245-head-cotton-candy.png' },
          { id: '246', name: 'Curling Stone', path: '/nouns-traits/Heads/246-head-curling-stone.png' },
          { id: '247', name: 'Fax Machine', path: '/nouns-traits/Heads/247-head-fax-machine.png' },
          { id: '248', name: 'Satellite', path: '/nouns-traits/Heads/248-head-satellite.png' },
          { id: '249', name: 'Tiger', path: '/nouns-traits/Heads/249-head-tiger.png' },
          { id: '250', name: 'Tuba', path: '/nouns-traits/Heads/250-head-tuba.png' },
          { id: '251', name: 'Sand Castle', path: '/nouns-traits/Heads/251-head-sand-castle.png' },
          { id: '252', name: 'Shrimp Tempura', path: '/nouns-traits/Heads/252-head-shrimp-tempura.png' },
          { id: '253', name: 'Green Snake', path: '/nouns-traits/Heads/253-head-green-snake.png' },
          { id: '254', name: 'Sock', path: '/nouns-traits/Heads/254-head-sock.png' },
          { id: '255', name: 'Paper Bag', path: '/nouns-traits/Heads/255-head-paper-bag.png' },
          { id: '256', name: 'Floppy Disk', path: '/nouns-traits/Heads/256-head-floppy-disk.png' },
          { id: '257', name: 'Abacus', path: '/nouns-traits/Heads/257-head-abacus.png' }
        ];

        const bodies: TraitOption[] = [
          { id: '0', name: 'Beige BSOD', path: '/nouns-traits/Bodies/0-body-bege-bsod.png' },
          { id: '1', name: 'Beige CRT', path: '/nouns-traits/Bodies/1-body-bege-crt.png' },
          { id: '2', name: 'Blue Sky', path: '/nouns-traits/Bodies/2-body-blue-sky.png' },
          { id: '3', name: 'Blue Grey', path: '/nouns-traits/Bodies/3-body-bluegrey.png' },
          { id: '4', name: 'Cold', path: '/nouns-traits/Bodies/4-body-cold.png' },
          { id: '5', name: 'Computer Blue', path: '/nouns-traits/Bodies/5-body-computerblue.png' },
          { id: '6', name: 'Dark Brown', path: '/nouns-traits/Bodies/6-body-darkbrown.png' },
          { id: '7', name: 'Dark Pink', path: '/nouns-traits/Bodies/7-body-darkpink.png' },
          { id: '8', name: 'Fog Grey', path: '/nouns-traits/Bodies/8-body-foggrey.png' },
          { id: '9', name: 'Gold', path: '/nouns-traits/Bodies/9-body-gold.png' },
          { id: '10', name: 'Grayscale 1', path: '/nouns-traits/Bodies/10-body-grayscale-1.png' },
          { id: '11', name: 'Grayscale 7', path: '/nouns-traits/Bodies/11-body-grayscale-7.png' },
          { id: '12', name: 'Grayscale 8', path: '/nouns-traits/Bodies/12-body-grayscale-8.png' },
          { id: '13', name: 'Grayscale 9', path: '/nouns-traits/Bodies/13-body-grayscale-9.png' },
          { id: '14', name: 'Green', path: '/nouns-traits/Bodies/14-body-green.png' },
          { id: '15', name: 'Gunk', path: '/nouns-traits/Bodies/15-body-gunk.png' },
          { id: '16', name: 'Hot Brown', path: '/nouns-traits/Bodies/16-body-hotbrown.png' },
          { id: '17', name: 'Magenta', path: '/nouns-traits/Bodies/17-body-magenta.png' },
          { id: '18', name: 'Orange Yellow', path: '/nouns-traits/Bodies/18-body-orange-yellow.png' },
          { id: '19', name: 'Orange', path: '/nouns-traits/Bodies/19-body-orange.png' },
          { id: '20', name: 'Peachy B', path: '/nouns-traits/Bodies/20-body-peachy-B.png' },
          { id: '21', name: 'Peachy A', path: '/nouns-traits/Bodies/21-body-peachy-a.png' },
          { id: '22', name: 'Purple', path: '/nouns-traits/Bodies/22-body-purple.png' },
          { id: '23', name: 'Red', path: '/nouns-traits/Bodies/23-body-red.png' },
          { id: '24', name: 'Red Pinkish', path: '/nouns-traits/Bodies/24-body-redpinkish.png' },
          { id: '25', name: 'Rust', path: '/nouns-traits/Bodies/25-body-rust.png' },
          { id: '26', name: 'Slime Green', path: '/nouns-traits/Bodies/26-body-slimegreen.png' },
          { id: '27', name: 'Teal Light', path: '/nouns-traits/Bodies/27-body-teal-light.png' },
          { id: '28', name: 'Teal', path: '/nouns-traits/Bodies/28-body-teal.png' },
          { id: '29', name: 'Yellow', path: '/nouns-traits/Bodies/29-body-yellow.png' },
          { id: '30', name: 'Lilac', path: '/nouns-traits/Bodies/30-body-lilac.png' }
        ];

        const glasses: TraitOption[] = [
          { id: '0', name: 'Hip Rose', path: '/nouns-traits/Noggles/0-glasses-hip-rose.png' },
          { id: '1', name: 'Square Black Eyes Red', path: '/nouns-traits/Noggles/1-glasses-square-black-eyes-red.png' },
          { id: '2', name: 'Square Black RGB', path: '/nouns-traits/Noggles/2-glasses-square-black-rgb.png' },
          { id: '3', name: 'Square Black', path: '/nouns-traits/Noggles/3-glasses-square-black.png' },
          { id: '4', name: 'Square Blue Med Saturated', path: '/nouns-traits/Noggles/4-glasses-square-blue-med-saturated.png' },
          { id: '5', name: 'Square Blue', path: '/nouns-traits/Noggles/5-glasses-square-blue.png' },
          { id: '6', name: 'Square Frog Green', path: '/nouns-traits/Noggles/6-glasses-square-frog-green.png' },
          { id: '7', name: 'Square Full Black', path: '/nouns-traits/Noggles/7-glasses-square-fullblack.png' },
          { id: '8', name: 'Square Green Blue Multi', path: '/nouns-traits/Noggles/8-glasses-square-green-blue-multi.png' },
          { id: '9', name: 'Square Grey Light', path: '/nouns-traits/Noggles/9-glasses-square-grey-light.png' },
          { id: '10', name: 'Square Guava', path: '/nouns-traits/Noggles/10-glasses-square-guava.png' },
          { id: '11', name: 'Square Honey', path: '/nouns-traits/Noggles/11-glasses-square-honey.png' },
          { id: '12', name: 'Square Magenta', path: '/nouns-traits/Noggles/12-glasses-square-magenta.png' },
          { id: '13', name: 'Square Orange', path: '/nouns-traits/Noggles/13-glasses-square-orange.png' },
          { id: '14', name: 'Square Pink Purple Multi', path: '/nouns-traits/Noggles/14-glasses-square-pink-purple-multi.png' },
          { id: '15', name: 'Square Red', path: '/nouns-traits/Noggles/15-glasses-square-red.png' },
          { id: '16', name: 'Square Smoke', path: '/nouns-traits/Noggles/16-glasses-square-smoke.png' },
          { id: '17', name: 'Square Teal', path: '/nouns-traits/Noggles/17-glasses-square-teal.png' },
          { id: '18', name: 'Square Watermelon', path: '/nouns-traits/Noggles/18-glasses-square-watermelon.png' },
          { id: '19', name: 'Square Yellow Orange Multi', path: '/nouns-traits/Noggles/19-glasses-square-yellow-orange-multi.png' },
          { id: '20', name: 'Square Yellow Saturated', path: '/nouns-traits/Noggles/20-glasses-square-yellow-saturated.png' },
          { id: '21', name: 'Deep Teal', path: '/nouns-traits/Noggles/21-glasses-deep-teal.png' },
          { id: '22', name: 'Grass', path: '/nouns-traits/Noggles/22-glasses-grass.png' },
          { id: '23', name: 'Lavender', path: '/nouns-traits/Noggles/23-glasses-lavender.png' }
        ];

        const backgrounds: TraitOption[] = [
          { id: '0', name: 'Cool', path: '/nouns-traits/Backgrounds/0-background-cool.svg' },
          { id: '1', name: 'Warm', path: '/nouns-traits/Backgrounds/1-background-warm.svg' }
        ];

        const accessories: TraitOption[] = [
          { id: '70', name: 'None', path: '/nouns-traits/Accessories/70-accessory-none.png' },
          { id: '0', name: '1N', path: '/nouns-traits/Accessories/0-accessory-1n.png' },
          { id: '1', name: 'Aardvark', path: '/nouns-traits/Accessories/1-accessory-aardvark.png' },
          { id: '2', name: 'Axe', path: '/nouns-traits/Accessories/2-accessory-axe.png' },
          { id: '3', name: 'Belly Chameleon', path: '/nouns-traits/Accessories/3-accessory-belly-chameleon.png' },
          { id: '4', name: 'Bird Flying', path: '/nouns-traits/Accessories/4-accessory-bird-flying.png' },
          { id: '5', name: 'Bird Side', path: '/nouns-traits/Accessories/5-accessory-bird-side.png' },
          { id: '6', name: 'Bling Anchor', path: '/nouns-traits/Accessories/6-accessory-bling-anchor.png' },
          { id: '7', name: 'Bling Anvil', path: '/nouns-traits/Accessories/7-accessory-bling-anvil.png' },
          { id: '8', name: 'Bling Arrow', path: '/nouns-traits/Accessories/8-accessory-bling-arrow.png' },
          { id: '9', name: 'Bling Cheese', path: '/nouns-traits/Accessories/9-accessory-bling-cheese.png' },
          { id: '10', name: 'Bling Gold Ingot', path: '/nouns-traits/Accessories/10-accessory-bling-gold-ingot.png' },
          { id: '11', name: 'Bling Love', path: '/nouns-traits/Accessories/11-accessory-bling-love.png' },
          { id: '12', name: 'Bling Mask', path: '/nouns-traits/Accessories/12-accessory-bling-mask.png' },
          { id: '13', name: 'Bling Rings', path: '/nouns-traits/Accessories/13-accessory-bling-rings.png' },
          { id: '14', name: 'Bling Scissors', path: '/nouns-traits/Accessories/14-accessory-bling-scissors.png' },
          { id: '15', name: 'Bling Sparkles', path: '/nouns-traits/Accessories/15-accessory-bling-sparkles.png' },
          { id: '16', name: 'Body Gradient Checker Disco', path: '/nouns-traits/Accessories/16-accessory-body-gradient-checkerdisco.png' },
          { id: '17', name: 'Body Gradient Dawn', path: '/nouns-traits/Accessories/17-accessory-body-gradient-dawn.png' },
          { id: '18', name: 'Body Gradient Dusk', path: '/nouns-traits/Accessories/18-accessory-body-gradient-dusk.png' },
          { id: '19', name: 'Body Gradient Glacier', path: '/nouns-traits/Accessories/19-accessory-body-gradient-glacier.png' },
          { id: '20', name: 'Body Gradient Ice', path: '/nouns-traits/Accessories/20-accessory-body-gradient-ice.png' },
          { id: '21', name: 'Body Gradient Pride', path: '/nouns-traits/Accessories/21-accessory-body-gradient-pride.png' },
          { id: '22', name: 'Body Gradient Red Pink', path: '/nouns-traits/Accessories/22-accessory-body-gradient-redpink.png' },
          { id: '23', name: 'Body Gradient Sunset', path: '/nouns-traits/Accessories/23-accessory-body-gradient-sunset.png' },
          { id: '24', name: 'Carrot', path: '/nouns-traits/Accessories/24-accessory-carrot.png' },
          { id: '25', name: 'Chain Logo', path: '/nouns-traits/Accessories/25-accessory-chain-logo.png' },
          { id: '26', name: 'Checker RGB', path: '/nouns-traits/Accessories/26-accessory-checker-RGB.png' },
          { id: '27', name: 'Checker Bigwalk Blue Prime', path: '/nouns-traits/Accessories/27-accessory-checker-bigwalk-blue-prime.png' },
          { id: '28', name: 'Checker Bigwalk Grey Light', path: '/nouns-traits/Accessories/28-accessory-checker-bigwalk-greylight.png' },
          { id: '29', name: 'Checker Bigwalk Rainbow', path: '/nouns-traits/Accessories/29-accessory-checker-bigwalk-rainbow.png' },
          { id: '30', name: 'Checker Spaced Black', path: '/nouns-traits/Accessories/30-accessory-checker-spaced-black.png' },
          { id: '31', name: 'Checker Spaced White', path: '/nouns-traits/Accessories/31-accessory-checker-spaced-white.png' },
          { id: '32', name: 'Checker Vibrant', path: '/nouns-traits/Accessories/32-accessory-checker-vibrant.png' },
          { id: '33', name: 'Checkers Big Green', path: '/nouns-traits/Accessories/33-accessory-checkers-big-green.png' },
          { id: '34', name: 'Checkers Big Red Cold', path: '/nouns-traits/Accessories/34-accessory-checkers-big-red-cold.png' },
          { id: '35', name: 'Checkers Black', path: '/nouns-traits/Accessories/35-accessory-checkers-black.png' },
          { id: '36', name: 'Checkers Blue', path: '/nouns-traits/Accessories/36-accessory-checkers-blue.png' },
          { id: '37', name: 'Checkers Magenta 80', path: '/nouns-traits/Accessories/37-accessory-checkers-magenta-80.png' },
          { id: '38', name: 'Chicken', path: '/nouns-traits/Accessories/38-accessory-chicken.png' },
          { id: '39', name: 'Cloud', path: '/nouns-traits/Accessories/39-accessory-cloud.png' },
          { id: '40', name: 'Clover', path: '/nouns-traits/Accessories/40-accessory-clover.png' },
          { id: '41', name: 'Collar Sunset', path: '/nouns-traits/Accessories/41-accessory-collar-sunset.png' },
          { id: '42', name: 'Cow', path: '/nouns-traits/Accessories/42-accessory-cow.png' },
          { id: '43', name: 'Decay Gray Dark', path: '/nouns-traits/Accessories/43-accessory-decay-gray-dark.png' },
          { id: '44', name: 'Decay Pride', path: '/nouns-traits/Accessories/44-accessory-decay-pride.png' },
          { id: '45', name: 'Dinosaur', path: '/nouns-traits/Accessories/45-accessory-dinosaur.png' },
          { id: '46', name: 'Dollar Bling', path: '/nouns-traits/Accessories/46-accessory-dollar-bling.png' },
          { id: '47', name: 'Dragon', path: '/nouns-traits/Accessories/47-accessory-dragon.png' },
          { id: '48', name: 'Ducky', path: '/nouns-traits/Accessories/48-accessory-ducky.png' },
          { id: '49', name: 'ETH', path: '/nouns-traits/Accessories/49-accessory-eth.png' },
          { id: '50', name: 'Eye', path: '/nouns-traits/Accessories/50-accessory-eye.png' },
          { id: '51', name: 'Flash', path: '/nouns-traits/Accessories/51-accessory-flash.png' },
          { id: '52', name: 'Fries', path: '/nouns-traits/Accessories/52-accessory-fries.png' },
          { id: '53', name: 'Glasses Logo Sun', path: '/nouns-traits/Accessories/53-accessory-glasses-logo-sun.png' },
          { id: '54', name: 'Glasses Logo', path: '/nouns-traits/Accessories/54-accessory-glasses-logo.png' },
          { id: '55', name: 'Glasses', path: '/nouns-traits/Accessories/55-accessory-glasses.png' },
          { id: '56', name: 'Grid Simple Bege', path: '/nouns-traits/Accessories/56-accessory-grid-simple-bege.png' },
          { id: '57', name: 'Heart', path: '/nouns-traits/Accessories/57-accessory-heart.png' },
          { id: '58', name: 'Hoodie Strings Uneven', path: '/nouns-traits/Accessories/58-accessory-hoodiestrings-uneven.png' },
          { id: '59', name: 'ID', path: '/nouns-traits/Accessories/59-accessory-id.png' },
          { id: '60', name: 'Infinity', path: '/nouns-traits/Accessories/60-accessory-infinity.png' },
          { id: '61', name: 'Insignia', path: '/nouns-traits/Accessories/61-accessory-insignia.png' },
          { id: '62', name: 'Leaf', path: '/nouns-traits/Accessories/62-accessory-leaf.png' },
          { id: '63', name: 'Lightbulb', path: '/nouns-traits/Accessories/63-accessory-lightbulb.png' },
          { id: '64', name: 'Lines 45 Greens', path: '/nouns-traits/Accessories/64-accessory-lines-45-greens.png' },
          { id: '65', name: 'Lines 45 Rose', path: '/nouns-traits/Accessories/65-accessory-lines-45-rose.png' },
          { id: '66', name: 'LP', path: '/nouns-traits/Accessories/66-accessory-lp.png' },
          { id: '67', name: 'Mars Face', path: '/nouns-traits/Accessories/67-accessory-marsface.png' },
          { id: '68', name: 'Matrix White', path: '/nouns-traits/Accessories/68-accessory-matrix-white.png' },
          { id: '69', name: 'Moon Block', path: '/nouns-traits/Accessories/69-accessory-moon-block.png' },
          { id: '71', name: 'Old Shirt', path: '/nouns-traits/Accessories/71-accessory-oldshirt.png' },
          { id: '72', name: 'Pizza Bling', path: '/nouns-traits/Accessories/72-accessory-pizza-bling.png' },
          { id: '73', name: 'Pocket Pencil', path: '/nouns-traits/Accessories/73-accessory-pocket-pencil.png' },
          { id: '74', name: 'Rain', path: '/nouns-traits/Accessories/74-accessory-rain.png' },
          { id: '75', name: 'Rainbow Steps', path: '/nouns-traits/Accessories/75-accessory-rainbow-steps.png' },
          { id: '76', name: 'RGB', path: '/nouns-traits/Accessories/76-accessory-rgb.png' },
          { id: '77', name: 'Robot', path: '/nouns-traits/Accessories/77-accessory-robot.png' },
          { id: '78', name: 'Safety Vest', path: '/nouns-traits/Accessories/78-accessory-safety-vest.png' },
          { id: '79', name: 'Scarf Clown', path: '/nouns-traits/Accessories/79-accessory-scarf-clown.png' },
          { id: '80', name: 'Secret X', path: '/nouns-traits/Accessories/80-accessory-secret-x.png' },
          { id: '81', name: 'Shirt Black', path: '/nouns-traits/Accessories/81-accessory-shirt-black.png' },
          { id: '82', name: 'Shrimp', path: '/nouns-traits/Accessories/82-accessory-shrimp.png' },
          { id: '83', name: 'Slime Splat', path: '/nouns-traits/Accessories/83-accessory-slimesplat.png' },
          { id: '84', name: 'Small Bling', path: '/nouns-traits/Accessories/84-accessory-small-bling.png' },
          { id: '85', name: 'Snowflake', path: '/nouns-traits/Accessories/85-accessory-snowflake.png' },
          { id: '86', name: 'Stains Blood', path: '/nouns-traits/Accessories/86-accessory-stains-blood.png' },
          { id: '87', name: 'Stains Zombie', path: '/nouns-traits/Accessories/87-accessory-stains-zombie.png' },
          { id: '88', name: 'Stripes and Checks', path: '/nouns-traits/Accessories/88-accessory-stripes-and-checks.png' },
          { id: '89', name: 'Stripes Big Red', path: '/nouns-traits/Accessories/89-accessory-stripes-big-red.png' },
          { id: '90', name: 'Stripes Blit', path: '/nouns-traits/Accessories/90-accessory-stripes-blit.png' },
          { id: '91', name: 'Stripes Blue Med', path: '/nouns-traits/Accessories/91-accessory-stripes-blue-med.png' },
          { id: '92', name: 'Stripes Brown', path: '/nouns-traits/Accessories/92-accessory-stripes-brown.png' },
          { id: '93', name: 'Stripes Olive', path: '/nouns-traits/Accessories/93-accessory-stripes-olive.png' },
          { id: '94', name: 'Stripes Red Cold', path: '/nouns-traits/Accessories/94-accessory-stripes-red-cold.png' },
          { id: '95', name: 'Sunset', path: '/nouns-traits/Accessories/95-accessory-sunset.png' },
          { id: '96', name: 'Taxi Checkers', path: '/nouns-traits/Accessories/96-accessory-taxi-checkers.png' },
          { id: '97', name: 'Tee Yo', path: '/nouns-traits/Accessories/97-accessory-tee-yo.png' },
          { id: '98', name: 'Text YOLO', path: '/nouns-traits/Accessories/98-accessory-text-yolo.png' },
          { id: '99', name: 'Think', path: '/nouns-traits/Accessories/99-accessory-think.png' },
          { id: '100', name: 'Tie Black on White', path: '/nouns-traits/Accessories/100-accessory-tie-black-on-white.png' },
          { id: '101', name: 'Tie Dye', path: '/nouns-traits/Accessories/101-accessory-tie-dye.png' },
          { id: '102', name: 'Tie Purple on White', path: '/nouns-traits/Accessories/102-accessory-tie-purple-on-white.png' },
          { id: '103', name: 'Tie Red', path: '/nouns-traits/Accessories/103-accessory-tie-red.png' },
          { id: '104', name: 'TXT A2+B2', path: '/nouns-traits/Accessories/104-accessory-txt-a2+b2.png' },
          { id: '105', name: 'TXT CC', path: '/nouns-traits/Accessories/105-accessory-txt-cc.png' },
          { id: '106', name: 'TXT CC2', path: '/nouns-traits/Accessories/106-accessory-txt-cc2.png' },
          { id: '107', name: 'TXT Copy', path: '/nouns-traits/Accessories/107-accessory-txt-copy.png' },
          { id: '108', name: 'TXT DAO Black', path: '/nouns-traits/Accessories/108-accessory-txt-dao-black.png' },
          { id: '109', name: 'TXT Doom', path: '/nouns-traits/Accessories/109-accessory-txt-doom.png' },
          { id: '110', name: 'TXT Dope Text', path: '/nouns-traits/Accessories/110-accessory-txt-dope-text.png' },
          { id: '111', name: 'TXT Foo Black', path: '/nouns-traits/Accessories/111-accessory-txt-foo-black.png' },
          { id: '112', name: 'TXT ICO', path: '/nouns-traits/Accessories/112-accessory-txt-ico.png' },
          { id: '113', name: 'TXT IO', path: '/nouns-traits/Accessories/113-accessory-txt-io.png' },
          { id: '114', name: 'TXT LMAO', path: '/nouns-traits/Accessories/114-accessory-txt-lmao.png' },
          { id: '115', name: 'TXT LOL', path: '/nouns-traits/Accessories/115-accessory-txt-lol.png' },
          { id: '116', name: 'TXT Mint', path: '/nouns-traits/Accessories/116-accessory-txt-mint.png' },
          { id: '117', name: 'TXT Nil Grey Dark', path: '/nouns-traits/Accessories/117-accessory-txt-nil-grey-dark.png' },
          { id: '118', name: 'TXT Noun F0F', path: '/nouns-traits/Accessories/118-accessory-txt-noun-f0f.png' },
          { id: '119', name: 'TXT Noun Green', path: '/nouns-traits/Accessories/119-accessory-txt-noun-green.png' },
          { id: '120', name: 'TXT Noun Multicolor', path: '/nouns-traits/Accessories/120-accessory-txt-noun-multicolor.png' },
          { id: '121', name: 'TXT Noun', path: '/nouns-traits/Accessories/121-accessory-txt-noun.png' },
          { id: '122', name: 'TXT Pi', path: '/nouns-traits/Accessories/122-accessory-txt-pi.png' },
          { id: '123', name: 'TXT Pop', path: '/nouns-traits/Accessories/123-accessory-txt-pop.png' },
          { id: '124', name: 'TXT ROFL', path: '/nouns-traits/Accessories/124-accessory-txt-rofl.png' },
          { id: '125', name: 'TXT We', path: '/nouns-traits/Accessories/125-accessory-txt-we.png' },
          { id: '126', name: 'TXT Yay', path: '/nouns-traits/Accessories/126-accessory-txt-yay.png' },
          { id: '127', name: 'Wall', path: '/nouns-traits/Accessories/127-accessory-wall.png' },
          { id: '128', name: 'Wave', path: '/nouns-traits/Accessories/128-accessory-wave.png' },
          { id: '129', name: 'Wet Money', path: '/nouns-traits/Accessories/129-accessory-wet-money.png' },
          { id: '130', name: 'Woolweave Bicolor', path: '/nouns-traits/Accessories/130-accessory-woolweave-bicolor.png' },
          { id: '131', name: 'Woolweave Dirt', path: '/nouns-traits/Accessories/131-accessory-woolweave-dirt.png' },
          { id: '132', name: 'Ying Yang', path: '/nouns-traits/Accessories/132-accessory-yingyang.png' },
          { id: '133', name: 'Body Bege', path: '/nouns-traits/Accessories/133-accessory-body-bege.png' },
          { id: '134', name: 'Body Gray Scale 1', path: '/nouns-traits/Accessories/134-accessory-body-gray-scale-1.png' },
          { id: '135', name: 'Body Gray Scale 9', path: '/nouns-traits/Accessories/135-accessory-body-gray-scale-9.png' },
          { id: '136', name: 'Body Ice Cold', path: '/nouns-traits/Accessories/136-accessory-body-ice-cold.png' },
          { id: '137', name: 'Grease', path: '/nouns-traits/Accessories/137-accessory-grease.png' },
          { id: '138', name: 'Tatewaku', path: '/nouns-traits/Accessories/138-accessory-tatewaku.png' },
          { id: '139', name: 'Uroko', path: '/nouns-traits/Accessories/139-accessory-uroko.png' },
          { id: '140', name: 'Broken Heart', path: '/nouns-traits/Accessories/140-accessory-broken-heart.png' },
          { id: '141', name: 'Sweater', path: '/nouns-traits/Accessories/141-accessory-sweater.png' },
          { id: '142', name: 'Gnars', path: '/nouns-traits/Accessories/142-accessory-gnars.png' },
          { id: '143', name: 'Silly Goose', path: '/nouns-traits/Accessories/143-accessory-silly-goose.png' }
        ];

        setTraitOptions({
          heads,
          bodies,
          glasses,
          backgrounds,
          accessories
        });

        // Notify parent component about loaded trait options
        if (onTraitOptionsLoaded) {
          onTraitOptionsLoaded({
            heads,
            bodies,
            glasses,
            backgrounds,
            accessories
          });
        }

        // Debug: Log the number of traits loaded
        console.log('Loaded traits:', {
          heads: heads.length,
          bodies: bodies.length,
          glasses: glasses.length,
          backgrounds: backgrounds.length,
          accessories: accessories.length
        });

        // Set default selections only if we don't have external state
        if (!externalSelectedTraits) {
          setInternalSelectedTraits({
            head: heads[0]?.path || '',
            body: bodies[0]?.path || '',
            glasses: glasses[0]?.path || '',
            background: '', // No background
            accessories: accessories[0]?.path || ''
          });
        }
      } catch (error) {
        console.error('Error loading trait options:', error);
      }
    };

    loadTraitOptions();
  }, [externalSelectedTraits, onTraitOptionsLoaded]);

  const handleTraitChange = (category: keyof typeof selectedTraits, value: string) => {
    console.log('Trait change:', { category, value, hasExternalCallback: !!externalOnTraitSelect });
    if (externalOnTraitSelect) {
      externalOnTraitSelect(category, value);
    } else {
      setInternalSelectedTraits(prev => ({
        ...prev,
        [category]: value
      }));
    }
  };

  const getSelectedTrait = (category: keyof typeof selectedTraits) => {
    let options: TraitOption[] = [];
    
    switch (category) {
      case 'head':
        options = traitOptions.heads || [];
        break;
      case 'body':
        options = traitOptions.bodies || [];
        break;
      case 'glasses':
        options = traitOptions.glasses || [];
        break;
      case 'background':
        options = traitOptions.backgrounds || [];
        break;
      case 'accessories':
        options = traitOptions.accessories || [];
        break;
    }
    
    return options.find(option => option.path === selectedTraits[category]);
  };


  if (showPreviewOnly) {
    return (
      <div className={`relative ${className} h-full`}>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 aspect-square mb-2 sm:mb-3 overflow-hidden">
            {/* Body */}
            {getSelectedTrait('body')?.path && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={getSelectedTrait('body')?.path || ''}
                  alt="Body"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            {/* Head */}
            {getSelectedTrait('head')?.path && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={getSelectedTrait('head')?.path || ''}
                  alt="Head"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            {/* Glasses */}
            {getSelectedTrait('glasses')?.path && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={getSelectedTrait('glasses')?.path || ''}
                  alt="Glasses"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            {/* Accessories */}
            {getSelectedTrait('accessories')?.path && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={getSelectedTrait('accessories')?.path || ''}
                  alt="Accessories"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className} h-full w-full`}>
      <div className="flex flex-col gap-1 w-full">
        {/* Preview Section - Hidden since we have separate preview window */}
        <div className="hidden">
          <div className="relative w-full max-w-[10rem] aspect-square mb-1 bg-slate-800 rounded-xl border-2 border-slate-600 overflow-hidden">
            {/* Background */}
            {getSelectedTrait('background')?.path && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={getSelectedTrait('background')?.path || ''}
                  alt="Background"
                  fill
                  className="object-cover"
                  style={{ border: 'none' }}
                />
              </div>
            )}
            
            {/* Body */}
            {getSelectedTrait('body')?.path && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={getSelectedTrait('body')?.path || ''}
                  alt="Body"
                  width={144}
                  height={144}
                  className="pixel-art"
                  style={{ border: 'none' }}
                />
              </div>
            )}
            
            {/* Head */}
            {getSelectedTrait('head')?.path && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={getSelectedTrait('head')?.path || ''}
                  alt="Head"
                  width={144}
                  height={144}
                  className="pixel-art"
                  style={{ border: 'none' }}
                />
              </div>
            )}
            
            {/* Glasses */}
            {getSelectedTrait('glasses')?.path && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={getSelectedTrait('glasses')?.path || ''}
                  alt="Glasses"
                  width={144}
                  height={144}
                  className="pixel-art"
                  style={{ border: 'none' }}
                />
              </div>
            )}
            
            {/* Accessories */}
            {getSelectedTrait('accessories')?.path && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={getSelectedTrait('accessories')?.path || ''}
                  alt="Accessories"
                  width={144}
                  height={144}
                  className="pixel-art"
                  style={{ border: 'none' }}
                />
              </div>
            )}
          </div>
          
        </div>

        {/* Controls Section */}
        <div className="w-full flex flex-col max-h-36 mt-2 mb-[45px] sm:max-h-32 sm:mt-3 sm:mb-[65px] md:max-h-40 md:mt-5 md:mb-[37px] lg:mb-0 lg:mt-10 lg:max-h-80 overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex gap-0.5 sm:gap-1 mb-0.5 sm:mb-1 w-full flex-shrink-0 ml-[3px] sm:ml-[5px] md:ml-[10px] mt-[1px] sm:mt-[2px] md:mt-[5px] sticky top-0 z-10">
            {[
            { key: 'head', label: 'Head', showCount: false },
            { key: 'body', label: 'Body', showCount: false },
            { key: 'glasses', label: 'Glasses', showCount: false },
            { key: 'accessories', label: 'Accessories', showCount: false }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  if (externalOnTabChange) {
                    externalOnTabChange(tab.key as 'head' | 'body' | 'glasses' | 'accessories');
                  } else {
                    setInternalActiveTab(tab.key as 'head' | 'body' | 'glasses' | 'accessories');
                  }
                }}
                className={`px-0.5 py-0.5 sm:px-1 sm:py-0.5 md:px-2 md:py-1 rounded font-pixel text-[4px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-xs lg:font-bold transition-colors whitespace-nowrap flex-shrink-0 nouns-builder-button ${
                  activeTab === tab.key
                    ? 'text-white'
                    : 'text-white hover:opacity-90'
                }`}
                style={{
                  backgroundColor: activeTab === tab.key ? 'rgba(67, 13, 145)' : 'rgba(67, 13, 145)',
                  opacity: activeTab === tab.key ? 1 : 0.8
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-transparent rounded flex-1 min-h-0 w-full overflow-y-auto">
            <div className="grid grid-cols-5 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 h-full gap-0.5 sm:gap-1 p-0.5 sm:p-1 trait-selection-grid">
              {(() => {
                let currentOptions: TraitOption[] = [];
                switch (activeTab) {
                  case 'head':
                    currentOptions = traitOptions.heads || [];
                    break;
                  case 'body':
                    currentOptions = traitOptions.bodies || [];
                    break;
                  case 'glasses':
                    currentOptions = traitOptions.glasses || [];
                    break;
                  case 'accessories':
                    currentOptions = traitOptions.accessories || [];
                    break;
                }
                
                return currentOptions.map((trait) => (
                  <button
                    key={trait.id}
                    onClick={() => handleTraitChange(activeTab, trait.path)}
                    className={`relative aspect-square w-full border-2 transition-all hover:scale-105 ${
                      selectedTraits[activeTab] === trait.path
                        ? 'border-blue-500 ring-1 ring-blue-500/50'
                        : 'border-transparent hover:border-slate-400'
                    }`}
                  >
                    <Image
                      src={trait.path}
                      alt={trait.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 1rem, (max-width: 768px) 1.2rem, 1.4rem"
                      style={{ border: 'none', outline: 'none' }}
                    />
                    {selectedTraits[activeTab] === trait.path && (
                      <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-[5px]">✓</span>
                      </div>
                    )}
                  </button>
                ));
              })()}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
