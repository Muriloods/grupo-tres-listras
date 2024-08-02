import { IMusicRequestsRepository } from "../../IMusicRequestsRepository";
import { MusicRequest } from "../../../../entities/MusicRequest";
import prisma from "../../../../../prisma/client";

export class MusicRequestsRepository implements IMusicRequestsRepository{

  async list(): Promise<MusicRequest[]> {
    return (await prisma.musicRequest.findMany({
      include: {
        requestor: true,
        event: true
      }
    })).map(mscR => {
      return new MusicRequest({
        ...mscR,
        requestor: {
          ...mscR.requestor,
          requested_musics: null,
          contacts: null
        },
        event: {
          ...mscR.event,
          contractor: null,
          requested_musics: null,
          photos: null
        }
      })
    });
  }

  async save(musicRequest: MusicRequest): Promise<MusicRequest> {
    const mscR = await prisma.musicRequest.create({
      data: {
        id: musicRequest.id,
        requestor_id: musicRequest.requestor_id,
        music_name: musicRequest.music_name,
        event_id: musicRequest.event_id
      },
      include: {
        requestor: true,
        event: true
      }
    })

    return new MusicRequest({
      ...mscR,
      event: {
        ...mscR.event,
        contractor: null,
        requested_musics: null,
        photos: null
      },
      requestor: {
        ...mscR.requestor,
        requested_musics: null,
        contacts: null
      }
    });
  }

  async findByEventId(event_id: string): Promise<MusicRequest[]> {
    return (await prisma.musicRequest.findMany({
      where: { event_id },
      include: {
        requestor: true
      }
    })).map(mscR => {
      return {
        ...mscR,
        event: null,
        requestor: {
          ...mscR.requestor,
          requested_musics: null,
          contacts: null
        }
      }
    });
  }
}