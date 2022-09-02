import PartyRepository from "../models/party.js";

function findAll(req, res) {
  PartyRepository.findAll().then((result) => res.json(result));
}

function findParty(req, res) {
  PartyRepository.findByPk(req.params.id).then((result) => res.json(result));
}

function addParty(req, res) {
  PartyRepository.create({
    name: req.headers['name'],
    descricao: req.headers['descricao'],
    address: req.headers['address']
  }).then((result) => res.json(result));
}

async function updateParty(req, res) {
  await PartyRepository.update(
    {
      name: req.headers['name'],
      descricao: req.headers['descricao'],
      address: req.headers['address']
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  PartyRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteParty(req, res) {
  await PartyRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  PartyRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addParty, findParty, updateParty, deleteParty };
