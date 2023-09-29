import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const fadeSlideAnimation =
  trigger('routeAnimations', [
    transition('* => Child', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':leave', [
        style({ left: 0, opacity: 1 })
      ], { optional: true }),
      query(':enter', [
        style({ right: '-10%', opacity: 0 })
      ], { optional: true }),
      group([
        query(':leave', [
          animate('100ms ease-in', style({ left: '-2%', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('200ms 100ms ease-out', style({ right: '0%', opacity: 1 }))
        ], { optional: true })
      ]),
    ]),
    transition('Child => *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':leave', [
        style({ left: 0, opacity: 1 })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-10%', opacity: 0 })
      ], { optional: true }),
      group([
        query(':leave', [
          animate('100ms ease-in', style({ left: '2%', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('200ms 100ms ease-out', style({ left: '0%', opacity: 1 }))
        ], { optional: true })
      ]),
    ]),
    transition('* => Login', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          right: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':leave', [
        style({ opacity: 1 })
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0 })
      ], { optional: true }),
      group([
        query(':leave', [
          animate('200ms ease-in', style({ opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('500ms 200ms ease-out', style({ opacity: 1 }))
        ], { optional: true })
      ]),
    ]),
    transition('Login => *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':leave', [
        style({ opacity: 1 })
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0 })
      ], { optional: true }),
      group([
        query(':leave', [
          animate('200ms ease-in', style({ opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('400ms 300ms ease-out', style({ opacity: 1 }))
        ], { optional: true })
      ]),
    ]),
    // transition('* <=> *', [
    //   style({ position: 'relative' }),
    //   query(':enter, :leave', [
    //     style({
    //       position: 'absolute',
    //       left: 0,
    //       width: '100%'
    //     })
    //   ], { optional: true }),
    //   query(':leave', [
    //     style({ opacity: 1 })
    //   ], { optional: true }),
    //   query(':enter', [
    //     style({ opacity: 0 })
    //   ], { optional: true }),
    //   group([
    //     query(':leave', [
    //       animate('100ms ease-in', style({ opacity: 0 }))
    //     ], { optional: true }),
    //     query(':enter', [
    //       animate('500ms 300ms ease-out', style({ opacity: 1 }))
    //     ], { optional: true })
    //   ]),
    // ]),
  ]);

export const headerAnimation =
  trigger(
    'headerAnimation',
    [
      transition(
        ':enter',
        [
          style({ height: '0px', opacity: 0 }),
          animate('400ms 380ms ease-in-out',
            style({ height: '64px', opacity: 1 }))
        ]
      ),
      transition(
        ':leave',
        [
          style({ height: '64px', opacity: 1 }),
          animate('400ms ease-out',
            style({ height: '0px', opacity: 0 }))
        ]
      )
    ]
  )

export const siderAnimation =
  trigger(
    'siderAnimation',
    [
      transition(
        ':enter',
        [
          style({ width: '0px', opacity: 0, minWidth: 0, flexBasis: 0 }),
          animate('400ms 300ms ease-in-out',
            style({ width: '215px', opacity: 1, minWidth: '215px', flexBasis: '215px' }))
        ]
      ),
      transition(
        ':leave',
        [
          style({ width: "215px", minWidth: '215px', flexBasis: '215px', opacity: 1 }),
          animate('400ms ease-out',
            style({ width: "0px", minWidth: 0, flexBasis: 0, opacity: 0 }))
        ]
      )
    ]
  )