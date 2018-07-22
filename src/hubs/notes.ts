import {HubFactory} from '../lib/HubFactory';

export namespace notes {
    const connection = HubFactory.createConnection('/notes');

    export async function hit(note: MidiNote) {
        await connection.invoke('HitNote', note);
    }

    export async function release(note: MidiNote) {
        await connection.invoke('ReleaseNote', note);
    }

    export function onNoteHit(callback: (note: MidiNote) => void) {
        connection.on('NoteHit', callback);
    }

    export function onNoteRelease(callback: (note: MidiNote) => void) {
        connection.on('NoteReleased', callback);
    }
}